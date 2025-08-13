import { useState, useEffect } from "react";
import { formatTimeNow, formatDateNow } from "../datetime/datetimeFormatter";

export function useDateTime() {
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
