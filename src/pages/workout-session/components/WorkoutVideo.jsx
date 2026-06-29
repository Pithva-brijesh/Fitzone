import React, { useEffect, useState } from "react";
import Icon from "../../../components/AppIcon";

export default function WorkoutVideo({ exercise }) {
  const [playing, setPlaying] = useState(true);

  const tips = [
    "Keep your core engaged.",
    "Control every movement.",
    "Breathe steadily.",
    "Maintain proper posture.",
    "Focus on good form.",
    "Don't rush your reps.",
  ];

  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">

      {/* Image */}

      <div className="relative group">

        <img
          src={exercise.image}
          alt={exercise.name}
          className="w-full h-[550px] object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Play / Pause */}

        <button
          onClick={() => setPlaying(!playing)}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition hover:scale-110">

            <Icon
              name={playing ? "Pause" : "Play"}
              size={50}
              color="white"
            />

          </div>
        </button>

        {/* Exercise */}

        <div className="absolute top-6 left-6">

          <div className="bg-black/50 backdrop-blur-lg rounded-2xl px-6 py-4">

            <h2 className="text-3xl font-bold text-white">
              {exercise.name}
            </h2>

            <p className="text-gray-300 mt-1">
              Perform each rep with control.
            </p>

          </div>

        </div>

        {/* Duration */}

        <div className="absolute top-6 right-6">

          <div className="bg-primary text-white rounded-2xl px-5 py-3 shadow-xl">

            <div className="text-xs uppercase opacity-80">
              Duration
            </div>

            <div className="text-2xl font-bold">
              {exercise.duration}s
            </div>

          </div>

        </div>

        {/* Coaching Tip */}

        <div className="absolute bottom-6 left-6 right-6">

          <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-5 flex items-center gap-3">

            <Icon
              name="Lightbulb"
              size={22}
              className="text-warning"
            />

            <div>

              <div className="text-xs uppercase tracking-wider text-gray-400">
                Coach Tip
              </div>

              <div className="text-white font-medium mt-1">
                {tips[tipIndex]}
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Cards */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-card">

        <div className="rounded-xl bg-muted p-4 text-center">

          <Icon
            name="Target"
            className="mx-auto text-primary mb-2"
          />

          <p className="text-xs text-muted-foreground">
            Target Reps
          </p>

          <h3 className="text-xl font-bold text-foreground">
            {exercise.reps}
          </h3>

        </div>

        <div className="rounded-xl bg-muted p-4 text-center">

          <Icon
            name="Clock"
            className="mx-auto text-success mb-2"
          />

          <p className="text-xs text-muted-foreground">
            Duration
          </p>

          <h3 className="text-xl font-bold text-success">
            {exercise.duration}s
          </h3>

        </div>

        <div className="rounded-xl bg-muted p-4 text-center">

          <Icon
            name="Activity"
            className="mx-auto text-warning mb-2"
          />

          <p className="text-xs text-muted-foreground">
            Intensity
          </p>

          <h3 className="text-xl font-bold text-warning">
            Medium
          </h3>

        </div>

        <div className="rounded-xl bg-muted p-4 text-center">

          <Icon
            name="Flame"
            className="mx-auto text-red-500 mb-2"
          />

          <p className="text-xs text-muted-foreground">
            Calories
          </p>

          <h3 className="text-xl font-bold text-red-500">
            ~12
          </h3>

        </div>

      </div>

    </div>
  );
}