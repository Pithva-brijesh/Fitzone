import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

export default function WaterTracker() {
  const goal = 8;

  const [glasses, setGlasses] = useState(5);

  const percentage = (glasses / goal) * 100;

  const addGlass = () => {
    if (glasses < goal) {
      setGlasses((prev) => prev + 1);
    }
  };

  const removeGlass = () => {
    if (glasses > 0) {
      setGlasses((prev) => prev - 1);
    }
  };

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Water Intake
          </h2>

          <p className="text-muted-foreground">
            Stay hydrated throughout the day
          </p>

        </div>

        <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center">

          <Icon
            name="Droplets"
            size={28}
            className="text-cyan-400"
          />

        </div>

      </div>

      {/* Progress */}

      <div className="mb-8">

        <div className="flex justify-between mb-3">

          <span className="font-semibold text-foreground">

            {glasses} / {goal} Glasses

          </span>

          <span className="text-cyan-400 font-bold">

            {Math.round(percentage)}%

          </span>

        </div>

        <div className="w-full h-4 bg-muted rounded-full overflow-hidden">

          <div
            className="h-4 bg-cyan-500 rounded-full transition-all duration-500"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

      </div>

      {/* Glasses */}

      <div className="grid grid-cols-4 gap-3 mb-8">

        {[...Array(goal)].map((_, index) => (

          <div
            key={index}
            className={`rounded-xl h-20 flex items-center justify-center border transition ${
              index < glasses
                ? "bg-cyan-500/20 border-cyan-400"
                : "bg-background border-border"
            }`}
          >

            <Icon
              name="GlassWater"
              size={30}
              className={
                index < glasses
                  ? "text-cyan-400"
                  : "text-muted-foreground"
              }
            />

          </div>

        ))}

      </div>

      {/* Buttons */}

      <div className="grid grid-cols-2 gap-4">

        <Button
          variant="outline"
          iconName="Minus"
          onClick={removeGlass}
        >
          Remove
        </Button>

        <Button
          iconName="Plus"
          onClick={addGlass}
        >
          Add Glass
        </Button>

      </div>

    </div>
  );
}