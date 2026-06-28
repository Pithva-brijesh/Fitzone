import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

export default function WorkoutControls({
  onPause,
  onResume,
  onSkip,
  onFinish,
}) {
  const [paused, setPaused] = useState(false);

  const handlePauseResume = () => {
    if (paused) {
      setPaused(false);
      if (onResume) onResume();
    } else {
      setPaused(true);
      if (onPause) onPause();
    }
  };

  return (
    <div className="morphic-card bg-card border border-border rounded-2xl p-6">

      <h2 className="text-2xl font-bold text-foreground mb-6">
        Workout Controls
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Pause / Resume */}
        <Button
          variant={paused ? "success" : "warning"}
          onClick={handlePauseResume}
          className="h-14"
          iconName={paused ? "Play" : "Pause"}
          iconPosition="left"
        >
          {paused ? "Resume" : "Pause"}
        </Button>

        {/* Skip */}
        <Button
          variant="secondary"
          onClick={onSkip}
          className="h-14"
          iconName="SkipForward"
          iconPosition="left"
        >
          Skip
        </Button>

        {/* Finish Exercise */}
        <Button
          variant="default"
          onClick={onFinish}
          className="h-14"
          iconName="CheckCircle"
          iconPosition="left"
        >
          Finish
        </Button>

        {/* Emergency Stop */}
        <Button
          variant="destructive"
          onClick={() => window.confirm("Stop Workout?")}
          className="h-14"
          iconName="Square"
          iconPosition="left"
        >
          Stop
        </Button>

      </div>

      {/* Workout Tips */}
      <div className="mt-8 p-5 rounded-xl bg-primary/10 border border-primary/20">

        <div className="flex items-start gap-3">

          <Icon
            name="Lightbulb"
            size={22}
            className="text-primary mt-1"
          />

          <div>

            <h3 className="font-semibold text-foreground mb-1">
              Trainer Tip
            </h3>

            <p className="text-sm text-muted-foreground">
              Focus on maintaining proper form rather than rushing through
              repetitions. Quality always beats quantity.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}