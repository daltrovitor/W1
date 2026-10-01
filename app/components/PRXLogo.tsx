// Hello World
"use client";

import React from "react";
import { PRX_LOGO_DATA } from "../data/logoPartsData";

export interface PRXLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  showSubtitle?: boolean;
  onClick?: () => void;
}

/**
 * Componente SVG vetorial da PRX com fidelidade 100% fotográfica e geométrica.
 * Composto por fatias transparentes em Base64 Data URI com posicionamento
 * absoluto no viewBox original (0 0 672 582).
 */
export default function PRXLogo({
  className = "",
  size = "md",
  showSubtitle = true,
  onClick,
}: PRXLogoProps) {
  const { viewBox, parts } = PRX_LOGO_DATA;

  const sizeClass =
    size === "sm"
      ? "w-24 sm:w-28"
      : size === "lg"
      ? "w-48 sm:w-60"
      : "w-36 sm:w-44";

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center justify-center ${onClick ? "cursor-pointer" : ""}`}
    >
      <svg
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`overflow-visible select-none h-auto ${sizeClass} ${className}`}
        role="img"
        aria-label="PRX — the next pays"
      >
        {parts.map((part) => {
          if (!showSubtitle && part.id === "subtitle") return null;
          return (
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
          );
        })}
      </svg>
    </div>
  );
}
