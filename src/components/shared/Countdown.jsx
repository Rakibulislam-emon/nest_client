import { useState, useEffect } from "react";
import dayjs from "dayjs";

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
      const target = dayjs(targetDate);
      const diff = target.diff(now);

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    // Update the countdown every second
    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer); // Cleanup on unmount
  }, [targetDate]);

  return (
    <div className="flex gap-2 md:justify-normal md:w-full justify-center items-center">
      <div className="bg-white rounded-md shadow-md p-2 text-center">
        <h2 className="text-3xl font-bold text-green-500">{timeLeft.days}</h2>
        <p className="text-gray-600">Days</p>
      </div>
      <div className="bg-white rounded-md shadow-md p-2 text-center">
        <h2 className="text-3xl font-bold text-green-500">{timeLeft.hours}</h2>
        <p className="text-gray-600">Hours</p>
      </div>
      <div className="bg-white rounded-md shadow-md p-2 text-center">
        <h2 className="text-3xl font-bold text-green-500">
          {timeLeft.minutes}
        </h2>
        <p className="text-gray-600">Mins</p>
      </div>
      <div className="bg-white rounded-md shadow-md p-2 text-center">
        <h2 className="text-3xl font-bold text-green-500">
          {timeLeft.seconds}
        </h2>
        <p className="text-gray-600">Sec</p>
      </div>
    </div>
  );
};

export default Countdown;
