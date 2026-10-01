// Hello World
"use client";

import React from "react";
import { PRX_LOGO_DATA } from "../data/logoPartsData";

export interface PRXLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  showSubtitle?: boolean;
  onClick?: () => void;
}

/**
 * Componente SVG vetorial da PRX com fidelidade 100% fotográfica e geométrica.
 * Composto por fatias transparentes em Base64 Data URI com posicionamento
 * absoluto no viewBox original.
 * Subtítulo oficial atualizado: "the next pays" (sem barra, alinhado harmonicamente).
 */
export default function PRXLogo({
  className = "",
  size = "md",
  showSubtitle = true,
  onClick,
}: PRXLogoProps) {
  const { parts } = PRX_LOGO_DATA;

  const sizeClass =
    size === "sm"
      ? "w-20 sm:w-24"
      : size === "lg"
      ? "w-40 sm:w-48"
      : size === "xl"
      ? "w-56 sm:w-64"
      : "w-28 sm:w-36";

  // Filtra as peças do emblema e letras
  const lettersAndEmblem = parts.filter((part) => part.id !== "subtitle");

  return (
    <div
      onClick={onClick}
      className={`inline-flex flex-col items-center justify-center ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      <svg
        viewBox="0 70 672 345"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`overflow-visible select-none h-auto ${sizeClass} ${className}`}
        role="img"
        aria-label="PRX — the next pays"
      >
        {lettersAndEmblem.map((part) => (
          <g id={`prx-part-${part.id}`} key={part.id}>
            <image
              href={part.href}
              x={part.x}
              y={part.y}
              width={part.w}
              height={part.h}
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        ))}
      </svg>
      {showSubtitle && (
        <span className="mt-1 text-[9px] sm:text-[10px] font-mono tracking-[0.22em] text-[#032029] uppercase font-semibold text-center select-none">
          the next pays
        </span>
      )}
    </div>
  );
}
