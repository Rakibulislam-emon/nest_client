import { useState, useEffect } from "react";
import dayjs from "dayjs";
import PropTypes from "prop-types";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = dayjs();
      let target = dayjs(targetDate);

      // Perpetual Logic: If target is today (past) or not provided,
      // target the end of the current day (midnight)
      if (!targetDate || target.isBefore(now)) {
        target = dayjs().endOf("day");
      }

      const diff = target.diff(now);

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm rounded-xl px-2 py-1 min-w-[45px] md:min-w-[55px] shadow-sm border border-neutral-100/50 hover:shadow-md transition-all group">
      <h2 className="text-lg md:text-xl font-bold text-primary-600 font-heading leading-tight group-hover:scale-110 transition-transform">
        {String(value).padStart(2, "0")}
      </h2>
      <p className="text-[8px] md:text-[10px] font-bold text-neutral-400 uppercase tracking-tighter">
        {label}
      </p>
    </div>
  );

  TimeBlock.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string.isRequired,
  };

  return (
    <div className="flex gap-2 md:gap-3 justify-center items-center w-full">
      {timeLeft.days > 0 && <TimeBlock value={timeLeft.days} label="Days" />}
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <TimeBlock value={timeLeft.minutes} label="Mins" />
      <TimeBlock value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

Countdown.propTypes = {
  targetDate: PropTypes.string,
};

export default Countdown;
