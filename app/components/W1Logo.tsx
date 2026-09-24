// Hello World
"use client";

import React from "react";
import { W1_LOGO_DATA } from "../data/logoPartsData";

export interface W1LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  separateLetters?: boolean;
  showSubtitle?: boolean;
  onClick?: () => void;
}

/**
 * Componente SVG vetorial da W1 Consultoria Financeira com fidelidade 100% fotográfica e geométrica.
 * Composto por fatias transparentes em Base64 Data URI com posicionamento
 * milimétrico no viewBox original (0 0 288 144), sem qualquer fundo indesejado.
 */
export default function W1Logo({
  className = "",
  size = "md",
  separateLetters = true,
  showSubtitle = false,
  onClick,
}: W1LogoProps) {
  const { viewBox, parts } = W1_LOGO_DATA;

  const sizeClass =
    size === "sm"
      ? "w-20 sm:w-24"
      : size === "lg"
      ? "w-40 sm:w-48"
      : size === "xl"
      ? "w-52 sm:w-64"
      : "w-28 sm:w-36";

  const activeParts = separateLetters
    ? parts.filter((p) => p.id !== "logo")
    : parts.filter((p) => p.id === "logo");

  return (
    <div
      onClick={onClick}
      className={`inline-flex flex-col items-center justify-center ${onClick ? "cursor-pointer" : ""}`}
    >
      <svg
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`overflow-visible select-none h-auto ${sizeClass} ${className}`}
        role="img"
        aria-label="W1 Consultoria Financeira"
      >
        {activeParts.map((part) => (
          <g id={`w1-part-${part.id}`} key={part.id}>
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
          Consultoria Financeira
        </span>
      )}
    </div>
  );
}
