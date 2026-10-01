// Hello World
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { PRX_LOGO_DATA, W1_LOGO_DATA } from "../data/logoPartsData";

interface IntroSplashProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Splash Screen de Introdução Cinética com Física Baseada em cubic-bezier(0.16, 1, 0.3, 1)
 * Metodologia de fatiamento SVG transparente com Base64 Data URIs:
 * Cadência estrita de 0.6s (600ms) por elemento:
 * 0.0s: Símbolo/Emblema PRX
 * 0.6s: Letra P (PRX)
 * 1.2s: Letra R (PRX)
 * 1.8s: Letra X (PRX)
 * 2.4s: Letra W (W1)
 * 3.0s: Número 1 (W1)
 * 3.6s: Subtítulo Institucional Unificado
 * ~1.0s: Respiro para apreciação da marca unificada
 * Encerramento suave com fade-out (opacity: 0, scale: 1.05, pointer-events-none).
 */
export default function IntroSplash({ isOpen, onClose }: IntroSplashProps) {
  // Passos da animação: 0=Emblema PRX, 1=P, 2=R, 3=X, 4=W, 5=1, 6=Subtítulo, 7=Completo/Respiro
  const [step, setStep] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleSkip = useCallback(() => {
    setIsFadingOut(true);
    setTimeout(() => {
      onClose();
      setIsFadingOut(false);
      setStep(0);
    }, 600);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    setStep(0);
    setIsFadingOut(false);

    const timers: NodeJS.Timeout[] = [];

    // Cadência estrita a cada 0.6s (600ms) conforme requisito 3
    const t1 = setTimeout(() => setStep(1), 600);   // t=0.6s: Letra P
    const t2 = setTimeout(() => setStep(2), 1200);  // t=1.2s: Letra R
    const t3 = setTimeout(() => setStep(3), 1800);  // t=1.8s: Letra X
    const t4 = setTimeout(() => setStep(4), 2400);  // t=2.4s: Letra W (W1)
    const t5 = setTimeout(() => setStep(5), 3000);  // t=3.0s: Número 1 (W1)
    const t6 = setTimeout(() => setStep(6), 3600);  // t=3.6s: Subtítulo Institucional
    const t7 = setTimeout(() => setStep(7), 4800);  // t=4.8s: Respiro de ~1s
    const t8 = setTimeout(() => {
      handleSkip();
    }, 5800); // t=5.8s: Transição de abertura da página

    timers.push(t1, t2, t3, t4, t5, t6, t7, t8);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSkip();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleSkip]);

  if (!isOpen) return null;

  // Recupera as partes individuais dos metadados
  const prxEmblem = PRX_LOGO_DATA.parts.find((p) => p.id === "emblem")!;
  const prxP = PRX_LOGO_DATA.parts.find((p) => p.id === "letter-p")!;
  const prxR = PRX_LOGO_DATA.parts.find((p) => p.id === "letter-r")!;
  const prxX = PRX_LOGO_DATA.parts.find((p) => p.id === "letter-x")!;
  const w1W = W1_LOGO_DATA.parts.find((p) => p.id === "letter-w")!;
  const w1One = W1_LOGO_DATA.parts.find((p) => p.id === "letter-1")!;

  // Estilo de transição física suave
  const transitionPhysics = "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)";

  // Estados dos elementos
  const emblemActive = step >= 0;
  const pActive = step >= 1;
  const rActive = step >= 2;
  const xActive = step >= 3;
  const wActive = step >= 4;
  const oneActive = step >= 5;
  const subtitleActive = step >= 6;

  return (
    <aside
      aria-label="Apresentação animada da marca PRX × W1 Consultoria Financeira"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-all duration-700 select-none ${
        isFadingOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Botão de Pular no Canto Superior Direito (Acessível) */}
      <div className="absolute top-6 right-6 z-20">
        <button
          type="button"
          onClick={handleSkip}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold tracking-wide text-zinc-600 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 rounded-sm cursor-pointer transition-colors duration-200 shadow-xs"
          aria-label="Pular introdução animada e abrir proposta"
        >
          <span>Pular introdução</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* Conteúdo Central da Apresentação */}
      <div className="w-full max-w-xl sm:max-w-2xl px-6 flex flex-col items-center">
        {/* Logotipo PRX em SVG com Fatiamento Exato e Animação por Grupos <g> */}
        <div className="w-full max-w-[340px] sm:max-w-[400px]">
          <svg
            viewBox={PRX_LOGO_DATA.viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto overflow-visible"
            role="img"
            aria-label="Logotipo Animado PRX"
          >
            {/* 1. Símbolo / Emblema (Entra no início, t=0.0s) */}
            <g
              id="part-emblem"
              style={{
                transform: emblemActive ? "translateY(0px)" : "translateY(-140px)",
                opacity: emblemActive ? 1 : 0,
                transition: transitionPhysics,
              }}
            >
              <image
                href={prxEmblem.href}
                x={prxEmblem.x}
                y={prxEmblem.y}
                width={prxEmblem.w}
                height={prxEmblem.h}
                preserveAspectRatio="xMidYMid meet"
              />
            </g>

            {/* 2. Letra P (Entra em t=0.6s) */}
            <g
              id="part-p"
              style={{
                transform: pActive ? "translateY(0px)" : "translateY(-140px)",
                opacity: pActive ? 1 : 0,
                transition: transitionPhysics,
              }}
            >
              <image
                href={prxP.href}
                x={prxP.x}
                y={prxP.y}
                width={prxP.w}
                height={prxP.h}
                preserveAspectRatio="xMidYMid meet"
              />
            </g>

            {/* 3. Letra R (Entra em t=1.2s) */}
            <g
              id="part-r"
              style={{
                transform: rActive ? "translateY(0px)" : "translateY(-140px)",
                opacity: rActive ? 1 : 0,
                transition: transitionPhysics,
              }}
            >
              <image
                href={prxR.href}
                x={prxR.x}
                y={prxR.y}
                width={prxR.w}
                height={prxR.h}
                preserveAspectRatio="xMidYMid meet"
              />
            </g>

            {/* 4. Letra X (Entra em t=1.8s) */}
            <g
              id="part-x"
              style={{
                transform: xActive ? "translateY(0px)" : "translateY(-140px)",
                opacity: xActive ? 1 : 0,
                transition: transitionPhysics,
              }}
            >
              <image
                href={prxX.href}
                x={prxX.x}
                y={prxX.y}
                width={prxX.w}
                height={prxX.h}
                preserveAspectRatio="xMidYMid meet"
              />
            </g>

            {/* 5. Subtítulo Institucional PRX (Entra em t=3.6s) */}
            <g
              id="part-subtitle"
              style={{
                transform: subtitleActive ? "translateY(0px)" : "translateY(-40px)",
                opacity: subtitleActive ? 1 : 0,
                transition: transitionPhysics,
              }}
            >
              <text
                x="336"
                y="464"
                textAnchor="middle"
                fill="#0B0B10"
                fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                fontSize="32"
                fontWeight="600"
                letterSpacing="0.22em"
                className="select-none"
              >
                the next pays
              </text>
            </g>
          </svg>
        </div>

        {/* Revelação e Animação da Marca W1 Consultoria Financeira */}
        <div
          style={{
            transform: wActive ? "translateY(0px)" : "translateY(30px)",
            opacity: wActive ? 1 : 0,
            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out",
          }}
          className="mt-6 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 sm:gap-4 px-4 py-2 border border-zinc-200 bg-zinc-50/80 rounded-sm">
            <span className="text-xs font-mono font-medium tracking-wider text-zinc-500 uppercase">
              Parceria Estratégica
            </span>
            <span className="text-zinc-300 font-light">×</span>

            {/* Logotipo W1 em SVG Puro Fatiado e Animável */}
            <div className="w-20 sm:w-24 h-auto">
              <svg
                viewBox={W1_LOGO_DATA.viewBox}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto overflow-visible"
                role="img"
                aria-label="W1 Consultoria Financeira"
              >
                {/* Letra W (Entra em t=2.4s) */}
                <g
                  id="part-w1-w"
                  style={{
                    transform: wActive ? "translateY(0px)" : "translateY(-140px)",
                    opacity: wActive ? 1 : 0,
                    transition: transitionPhysics,
                  }}
                >
                  <image
                    href={w1W.href}
                    x={w1W.x}
                    y={w1W.y}
                    width={w1W.w}
                    height={w1W.h}
                    preserveAspectRatio="xMidYMid meet"
                  />
                </g>

                {/* Número 1 (Entra em t=3.0s) */}
                <g
                  id="part-w1-1"
                  style={{
                    transform: oneActive ? "translateY(0px)" : "translateY(-140px)",
                    opacity: oneActive ? 1 : 0,
                    transition: transitionPhysics,
                  }}
                >
                  <image
                    href={w1One.href}
                    x={w1One.x}
                    y={w1One.y}
                    width={w1One.w}
                    height={w1One.h}
                    preserveAspectRatio="xMidYMid meet"
                  />
                </g>
              </svg>
            </div>
          </div>

          {/* Subtítulo institucional unificado que surge em t=3.6s */}
          <div
            style={{
              transform: subtitleActive ? "translateY(0px)" : "translateY(15px)",
              opacity: subtitleActive ? 1 : 0,
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out",
            }}
            className="mt-3 text-center"
          >
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase font-semibold">
              W1 CONSULTORIA FINANCEIRA
            </span>
            <p className="text-xs text-zinc-400 mt-0.5">
              Uma nova geração de investidores começa antes do patrimônio.
            </p>
          </div>
        </div>

        {/* Barra de Progresso em Pílulas (Passos 0 a 6) */}
        <div className="mt-8 flex items-center justify-center gap-2" aria-hidden="true">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                step >= i ? "w-6 bg-[#032029]" : "w-2 bg-zinc-200"
              }`}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
