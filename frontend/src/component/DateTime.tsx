import { useState, useEffect } from "react";

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

function formatTimeNow(): string {
  return timeFmt.format(new Date());
}

function formatDateNow(): string {
  return `${dateLongFmt.format(new Date())} | ${dateShortFmt.format(
    new Date()
  )}`;
}

export function Time() {
  const [currentTime, setCurrentTime] = useState<string>(() => formatTimeNow());
  const [currentDate, setCurrentDate] = useState<string>(() => formatDateNow());

  useEffect(() => {
    let id: number | undefined;
    const tick = () => {
      setCurrentTime(formatTimeNow());
      setCurrentDate(formatDateNow());
      const delay = 1000 - (Date.now() % 1000);
      id = window.setTimeout(tick, delay); // recursive timeout loop
    };

    tick();

    return () => {
      if (id !== undefined) window.clearTimeout(id);
    };
  }, []);
  return (
    <>
      <div className="flex items-center flex-col text-white">
        <span className="text-4xl pt-5">{currentTime}</span>
        <span className="text-">{currentDate}</span>
      </div>
    </>
  );
}
