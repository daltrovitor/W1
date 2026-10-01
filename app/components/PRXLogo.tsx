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
 * Subtítulo oficial atualizado: "the next pays" (sem barra).
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
      ? "w-24 sm:w-28"
      : size === "lg"
      ? "w-48 sm:w-60"
      : size === "xl"
      ? "w-64 sm:w-80"
      : "w-36 sm:w-44";

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
        viewBox={showSubtitle ? "0 0 672 500" : "0 0 672 420"}
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

        {/* Subtítulo institucional "the next pays" sem barra */}
        {showSubtitle && (
          <g id="prx-part-subtitle">
            <text
              x="336"
              y="464"
              textAnchor="middle"
              fill="#0B0B10"
              fontSize="32"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="600"
              letterSpacing="0.22em"
              className="select-none"
            >
              the next pays
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
