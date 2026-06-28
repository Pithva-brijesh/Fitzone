import React from "react";
import Icon from "../../../components/AppIcon";

export default function WorkoutVideo({ exercise }) {
  return (
    <div className="morphic-card bg-card border border-border rounded-2xl overflow-hidden">

      {/* Image Container */}
      <div className="relative">

        <img
          src={exercise.image}
          alt={exercise.name}
          className="w-full h-[520px] object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">

          <button className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:scale-110 transition">

            <Icon
              name="Play"
              size={50}
              color="white"
            />

          </button>

        </div>

        {/* Exercise Name */}
        <div className="absolute top-6 left-6">

          <div className="bg-black/60 px-5 py-3 rounded-xl">

            <h2 className="text-white text-2xl font-bold">
              {exercise.name}
            </h2>

            <p className="text-gray-300">
              Follow the demonstration
            </p>

          </div>

        </div>

        {/* Duration Badge */}
        <div className="absolute top-6 right-6">

          <div className="bg-primary text-white px-5 py-3 rounded-xl">

            <div className="text-sm">
              Duration
            </div>

            <div className="font-bold text-lg">
              {exercise.duration}s
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Info */}
      <div className="grid grid-cols-3 border-t border-border">

        <div className="p-5 text-center">

          <div className="text-sm text-muted-foreground">
            Exercise
          </div>

          <div className="text-xl font-bold text-foreground">
            {exercise.name}
          </div>

        </div>

        <div className="p-5 border-l border-r border-border text-center">

          <div className="text-sm text-muted-foreground">
            Target
          </div>

          <div className="text-xl font-bold text-primary">
            {exercise.reps} Reps
          </div>

        </div>

        <div className="p-5 text-center">

          <div className="text-sm text-muted-foreground">
            Time
          </div>

          <div className="text-xl font-bold text-success">
            {exercise.duration} sec
          </div>

        </div>

      </div>

    </div>
  );
}