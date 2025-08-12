import type { SizeType, TextSizeType } from "../datetime/types";

export const sizeClassMap = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
};

export function resolveSizeClass(size: TextSizeType): string {
  if (typeof size === "string" && size.startsWith("[")) {
    return `text-${size}`;
  }
  return sizeClassMap[size as SizeType] || "text-base";
}
