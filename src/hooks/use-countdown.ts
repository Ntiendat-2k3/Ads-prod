"use client";

/**
 * Custom hook quản lý bộ đếm ngược Flash Sale
 */

import { useState, useEffect } from "react";

interface CountdownTime {
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdown(initialHours = 2, initialMinutes = 45, initialSeconds = 18) {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: initialHours, minutes: initialMinutes, seconds: initialSeconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [initialHours, initialMinutes, initialSeconds]);

  const formattedHours = timeLeft.hours.toString().padStart(2, "0");
  const formattedMinutes = timeLeft.minutes.toString().padStart(2, "0");
  const formattedSeconds = timeLeft.seconds.toString().padStart(2, "0");

  return {
    ...timeLeft,
    formattedHours,
    formattedMinutes,
    formattedSeconds,
  };
}

