// (12-hour with AM/PM)
export const timeFmt = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

// (Aug 12, 2025)
export const dateLongFmt = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

// (08/12/25)
export const dateShortFmt = new Intl.DateTimeFormat("en-US", {
  month: "2-digit",
  day: "2-digit",
  year: "2-digit",
});

export function formatTimeNow(): string {
  return timeFmt.format(new Date());
}

export function formatDateNow(): string {
  return `${dateLongFmt.format(new Date())} | ${dateShortFmt.format(
    new Date()
  )}`;
}
