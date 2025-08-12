import { useState, useEffect } from "react";

type SizeType =
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

type TextSizeType = SizeType | `[${string}]`;

interface TimeProps {
  timeSize?: TextSizeType;
  dateSize?: TextSizeType;
}

const timeFmt = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

const dateLongFmt = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const dateShortFmt = new Intl.DateTimeFormat("en-US", {
  month: "2-digit",
  day: "2-digit",
  year: "2-digit",
});

const sizeClassMap = {
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

function formatTimeNow(): string {
  return timeFmt.format(new Date());
}

function formatDateNow(): string {
  return `${dateLongFmt.format(new Date())} | ${dateShortFmt.format(
    new Date()
  )}`;
}

function resolveSizeClass(size: TextSizeType): string {
  if (typeof size === "string" && size.startsWith("[")) {
    return `text-${size}`;
  }
  return sizeClassMap[size as SizeType] || "text-base";
}

function useDateTime() {
  const [time, setTime] = useState(formatTimeNow);
  const [date, setDate] = useState(formatDateNow);

  useEffect(() => {
    let timerId: number | undefined;

    const tick = () => {
      setTime(formatTimeNow());
      setDate(formatDateNow());

      const delay = 1000 - (Date.now() % 1000);
      timerId = window.setTimeout(tick, delay);
    };

    tick();

    return () => {
      if (timerId !== undefined) window.clearTimeout(timerId);
    };
  }, []);

  return { date, time };
}

export function Time({ timeSize = "4xl", dateSize = "base" }: TimeProps) {
  const { date, time } = useDateTime();

  return (
    <div className="flex items-center flex-col text-white">
      <span className={`${resolveSizeClass(timeSize)} pt-5`}>{time}</span>
      <span className={`${resolveSizeClass(dateSize)}`}>{date}</span>
    </div>
  );
}
