export type SizeType =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

export type TextSizeType = SizeType | `[${string}]`;

export interface TimeProps {
  timeSize?: TextSizeType;
  dateSize?: TextSizeType;
}
