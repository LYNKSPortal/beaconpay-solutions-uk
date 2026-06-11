"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const LAUNCH_DATE = new Date("2026-11-07T00:00:00Z");

function calculate(): TimeLeft {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculate());
    const id = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft?.days },
    { label: "Hours", value: timeLeft?.hours },
    { label: "Minutes", value: timeLeft?.minutes },
    { label: "Seconds", value: timeLeft?.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-5 justify-center">
      {units.map(({ label, value }) => (
        <div
          key={label}
          className="count-card rounded-2xl px-4 py-4 sm:px-6 sm:py-5 flex flex-col items-center min-w-[72px] sm:min-w-[90px]"
        >
          <span className="text-3xl sm:text-5xl font-bold text-white tabular-nums leading-none">
            {value === undefined ? "--" : String(value).padStart(2, "0")}
          </span>
          <span className="text-[10px] sm:text-xs text-blue-300/70 uppercase tracking-widest mt-2 font-medium">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
