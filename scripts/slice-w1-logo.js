// Hello World
const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

// 1. Carrega o PNG do logotipo W1
const inputPath = path.join(__dirname, '../public/W1 logo.PNG');
const buffer = fs.readFileSync(inputPath);
const src = PNG.sync.read(buffer);

const fgR = 3, fgG = 32, fgB = 41; // Cor exata do logotipo W1 (#032029)

// 2. Identifica os pixels do primeiro plano (não-brancos)
const isFg = (x, y) => {
  const idx = (src.width * y + x) << 2;
  const r = src.data[idx];
  const g = src.data[idx + 1];
  const b = src.data[idx + 2];
  return !(r > 240 && g > 240 && b > 240);
};

// 3. Fatiamento Geométrico por Componentes Conexos / Spans
const visited = new Uint8Array(src.width * src.height);
const compMap = new Int32Array(src.width * src.height).fill(-1);
let compIndex = 0;

for (let y = 0; y < src.height; y++) {
  for (let x = 0; x < src.width; x++) {
    const pos = y * src.width + x;
    if (isFg(x, y) && !visited[pos]) {
      const queue = [x, y];
      visited[pos] = 1;
      compMap[pos] = compIndex;
      let head = 0;
      let count = 0;
      while (head < queue.length) {
        const qx = queue[head++];
        const qy = queue[head++];
        count++;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const nx = qx + dx;
            const ny = qy + dy;
            if (nx >= 0 && nx < src.width && ny >= 0 && ny < src.height) {
              const npos = ny * src.width + nx;
              if (!visited[npos] && isFg(nx, ny)) {
                visited[npos] = 1;
                compMap[npos] = compIndex;
                queue.push(nx, ny);
              }
            }
          }
        }
      }
      if (count > 50) {
        compIndex++;
      }
    }
  }
}

// Identifica W (esquerda) e 1 (direita)
let compW = -1, comp1 = -1;
for (let y = 0; y < src.height; y++) {
  for (let x = 0; x < src.width; x++) {
    const c = compMap[y * src.width + x];
    if (c !== -1) {
      if (x < 250 && compW === -1) compW = c;
      if (x > 350 && comp1 === -1) comp1 = c;
    }
  }
}

// Suavização das bordas anti-aliased
for (let y = 0; y < src.height; y++) {
  for (let x = 0; x < src.width; x++) {
    const pos = y * src.width + x;
    if (compMap[pos] === -1) {
      const idx = pos << 2;
      const r = src.data[idx], g = src.data[idx + 1], b = src.data[idx + 2];
      if (r < 254 || g < 254 || b < 254) {
        let nearest = -1;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && nx < src.width && ny >= 0 && ny < src.height) {
              const nc = compMap[ny * src.width + nx];
              if (nc !== -1) { nearest = nc; break; }
            }
          }
          if (nearest !== -1) break;
        }
        if (nearest !== -1) compMap[pos] = nearest;
      }
    }
  }
}

// Bounding boxes
const getBBox = (targetComp) => {
  let minX = src.width, maxX = 0, minY = src.height, maxY = 0;
  for (let y = 0; y < src.height; y++) {
    for (let x = 0; x < src.width; x++) {
      const c = compMap[y * src.width + x];
      if (targetComp === 'all' ? c !== -1 : c === targetComp) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  return { minX, maxX, minY, maxY, w: maxX - minX + 1, h: maxY - minY + 1 };
};

const bboxAll = getBBox('all');
const bboxW = getBBox(compW);
const bbox1 = getBBox(comp1);

// Função para recortar fatia transparente
function createSlice(bbox, targetComp) {
  const slice = new PNG({ width: bbox.w, height: bbox.h });
  
  for (let sy = 0; sy < bbox.h; sy++) {
    for (let sx = 0; sx < bbox.w; sx++) {
      const ox = bbox.minX + sx;
      const oy = bbox.minY + sy;
      const oPos = oy * src.width + ox;
      const sIdx = (bbox.w * sy + sx) << 2;
      
      const c = compMap[oPos];
      const match = targetComp === 'all' ? (c !== -1) : (c === targetComp);
      
      if (match) {
        const oIdx = oPos << 2;
        const r = src.data[oIdx];
        const g = src.data[oIdx + 1];
        const b = src.data[oIdx + 2];
        
        const whiteness = ((r - fgR) + (g - fgG) + (b - fgB)) / ((255 - fgR) + (255 - fgG) + (255 - fgB));
        const alpha = Math.max(0, Math.min(255, Math.round((1 - whiteness) * 255)));
        
        slice.data[sIdx] = fgR;
        slice.data[sIdx + 1] = fgG;
        slice.data[sIdx + 2] = fgB;
        slice.data[sIdx + 3] = alpha;
      } else {
        slice.data[sIdx] = 0;
        slice.data[sIdx + 1] = 0;
        slice.data[sIdx + 2] = 0;
        slice.data[sIdx + 3] = 0;
      }
    }
  }
  
  const pngBuffer = PNG.sync.write(slice);
  const base64 = 'data:image/png;base64,' + pngBuffer.toString('base64');
  return { buffer: pngBuffer, base64 };
}

const sliceW = createSlice(bboxW, compW);
const slice1 = createSlice(bbox1, comp1);
const sliceAll = createSlice(bboxAll, 'all');

// Salva imagens auxiliares em public
fs.writeFileSync(path.join(__dirname, '../public/w1-letter-w.png'), sliceW.buffer);
fs.writeFileSync(path.join(__dirname, '../public/w1-letter-1.png'), slice1.buffer);
fs.writeFileSync(path.join(__dirname, '../public/w1-logo-full.png'), sliceAll.buffer);

console.log('Fatias geradas com sucesso!');
console.log('W box:', bboxW);
console.log('1 box:', bbox1);
console.log('All box:', bboxAll);

// Exporta dados estruturados
const w1Data = {
  nominalWidth: bboxAll.w,
  nominalHeight: bboxAll.h,
  viewBox: `0 0 ${bboxAll.w} ${bboxAll.h}`,
  parts: [
    {
      id: "letter-w",
      name: "Letra W da W1",
      x: bboxW.minX - bboxAll.minX,
      y: bboxW.minY - bboxAll.minY,
      w: bboxW.w,
      h: bboxW.h,
      href: sliceW.base64
    },
    {
      id: "letter-1",
      name: "Número 1 da W1",
      x: bbox1.minX - bboxAll.minX,
      y: bbox1.minY - bboxAll.minY,
      w: bbox1.w,
      h: bbox1.h,
      href: slice1.base64
    },
    {
      id: "logo",
      name: "Logotipo W1 Completo",
      x: 0,
      y: 0,
      w: bboxAll.w,
      h: bboxAll.h,
      href: sliceAll.base64
    }
  ]
};

fs.writeFileSync(path.join(__dirname, '../app/data/w1_generated_data.json'), JSON.stringify(w1Data, null, 2));
console.log('Salvo em app/data/w1_generated_data.json');
