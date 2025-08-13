import type { TimeProps } from "../utils/datetime/types";
import { useDateTime } from "../utils/hooks/useDateTime";
import { resolveSizeClass } from "../utils/tailwind/sizeClasses";

export function Time({ timeSize = "4xl", dateSize = "base" }: TimeProps) {
  const { date, time } = useDateTime();

  return (
    <div className="flex items-center flex-col text-white">
      <span className={`${resolveSizeClass(timeSize)} pt-5`}>{time}</span>
      <span className={`${resolveSizeClass(dateSize)}`}>{date}</span>
    </div>
  );
}
