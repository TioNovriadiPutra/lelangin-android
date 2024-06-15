import dayjs from "dayjs";
import { useEffect, useState } from "react";

const useCountdownTimer = (targetTime) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetTime));

  useEffect(() => {
    if (timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.hours > 0) {
      const timer = setInterval(() => {
        setTimeLeft(getTimeLeft(targetTime));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [targetTime]);

  function getTimeLeft(targetTime) {
    const now = dayjs();
    const target = dayjs(targetTime);
    const duration = target.diff(now);
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);

    return {
      hours: hours < 0 ? 0 : hours,
      minutes: minutes < 0 ? 0 : minutes,
      seconds: seconds < 0 ? 0 : seconds,
    };
  }

  return {
    timeLeft,
  };
};

export default useCountdownTimer;
