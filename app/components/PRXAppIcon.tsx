// Hello World
"use client";

import React from "react";

export interface PRXAppIconProps {
  className?: string;
  size?: number | string;
  onClick?: () => void;
}

/**
 * Ícone oficial do aplicativo PRX (https://prx.app.br/brand/prx-app-icon.svg/)
 * Renderizado em SVG puro com gradientes vetoriais em alta fidelidade.
 */
export default function PRXAppIcon({
  className = "",
  size = 40,
  onClick,
}: PRXAppIconProps) {
  const sizeStyle = typeof size === "number" ? { width: size, height: size } : {};

  return (
    <div
      onClick={onClick}
      style={sizeStyle}
      className={`inline-flex items-center justify-center shrink-0 ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 318.5 318.5"
        className="w-full h-full select-none"
        role="img"
        aria-label="PRX App Icon"
      >
        <defs>
          <radialGradient id="prx-icon-fs" gradientUnits="userSpaceOnUse" cx="330" cy="172" r="140">
            <stop offset="0" stopColor="#7607FD" />
            <stop offset="0.42" stopColor="#6430FA" />
            <stop offset="0.7" stopColor="#3C9CFD" />
            <stop offset="1" stopColor="#0BD9FD" />
          </radialGradient>
          <linearGradient id="prx-icon-fx" gradientUnits="userSpaceOnUse" x1="450" y1="310" x2="570" y2="405">
            <stop offset="0" stopColor="#7C04F0" />
            <stop offset="0.4" stopColor="#6420F9" />
            <stop offset="0.55" stopColor="#4F80FE" />
            <stop offset="1" stopColor="#06E4F9" />
          </linearGradient>
          <linearGradient id="prx-icon-fb" gradientUnits="userSpaceOnUse" x1="500.18" y1="0" x2="582.32" y2="0">
            <stop offset="0" stopColor="#7607FD" />
            <stop offset="1" stopColor="#0BD9FD" />
          </linearGradient>
        </defs>
        <rect width="318.5" height="318.5" rx="57.3" fill="#0B0B10" />
        <g transform="translate(-180.0 -23.25)">
          <path fill="#FFFFFF" d="M214 119H312L340 147.8H282.2L333.7 199.7L261.2 272.7H221L293.5 199Z" />
          <path fill="url(#prx-icon-fs)" d="M414 92H464.5L383.3 173L458.2 253.2H359.5L332 223.2H389.5L339.2 167.8Z" />
        </g>
      </svg>
    </div>
  );
}
