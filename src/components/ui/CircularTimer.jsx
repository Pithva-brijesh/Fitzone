import React from "react";

export default function CircularTimer({
  timeLeft,
  totalTime,
  size = 220,
  strokeWidth = 14,
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = timeLeft / totalTime;

  const offset = circumference * (1 - progress);

  const getColor = () => {
    if (timeLeft <= 5) return "#EF4444";
    if (timeLeft <= 10) return "#F59E0B";
    return "#6366F1";
  };

  const glowColor = () => {
    if (timeLeft <= 5) return "drop-shadow-[0_0_20px_rgba(239,68,68,.8)]";
    if (timeLeft <= 10) return "drop-shadow-[0_0_20px_rgba(245,158,11,.8)]";
    return "drop-shadow-[0_0_20px_rgba(99,102,241,.8)]";
  };

  return (
    <div className="relative flex items-center justify-center">

      {/* Glow */}

      <div
        className={`absolute rounded-full w-56 h-56 ${glowColor()} animate-pulse`}
      />

      <svg
        width={size}
        height={size}
        className="-rotate-90"
      >

        {/* Background */}

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#2A2E4D"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Progress */}

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getColor()}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 1s linear",
          }}
        />

      </svg>

      {/* Center */}

      <div className="absolute flex flex-col items-center">

        <div
          className={`text-6xl font-extrabold text-white ${
            timeLeft <= 5 ? "animate-bounce" : ""
          }`}
        >
          {timeLeft}
        </div>

        <p className="text-sm text-gray-400 tracking-widest uppercase mt-2">
          Seconds
        </p>

        <div className="mt-4 w-24 h-2 rounded-full bg-gray-700 overflow-hidden">

          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-1000"
            style={{
              width: `${progress * 100}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}