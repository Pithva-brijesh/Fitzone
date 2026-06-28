import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

export default function WorkoutComplete({
  calories,
  duration,
  xp,
}) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">

      <div className="max-w-3xl w-full morphic-card bg-card border border-border rounded-3xl p-10">

        {/* Success Icon */}

        <div className="flex justify-center">

          <div className="w-32 h-32 rounded-full bg-success flex items-center justify-center shadow-lg">

            <Icon
              name="Check"
              size={70}
              color="white"
            />

          </div>

        </div>

        {/* Title */}

        <div className="text-center mt-8">

          <h1 className="text-5xl font-bold text-foreground">
            Workout Complete!
          </h1>

          <p className="text-muted-foreground text-lg mt-3">
            Great job! You finished today's workout.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div className="bg-primary/10 rounded-2xl p-6 text-center">

            <Icon
              name="Flame"
              size={34}
              className="text-warning mx-auto mb-3"
            />

            <p className="text-muted-foreground">
              Calories
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-2">
              {calories}
            </h2>

          </div>

          <div className="bg-success/10 rounded-2xl p-6 text-center">

            <Icon
              name="Clock3"
              size={34}
              className="text-success mx-auto mb-3"
            />

            <p className="text-muted-foreground">
              Duration
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-2">
              {duration}
            </h2>

          </div>

          <div className="bg-accent/10 rounded-2xl p-6 text-center">

            <Icon
              name="Award"
              size={34}
              className="text-accent mx-auto mb-3"
            />

            <p className="text-muted-foreground">
              XP Earned
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-2">
              +{xp}
            </h2>

          </div>

        </div>

        {/* Achievement */}

        <div className="mt-10 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 p-6">

          <div className="flex items-center gap-4">

            <Icon
              name="Trophy"
              size={42}
              className="text-warning"
            />

            <div>

              <h3 className="text-2xl font-bold text-foreground">
                Achievement Unlocked!
              </h3>

              <p className="text-muted-foreground mt-1">
                Workout Warrior — Complete your daily workout.
              </p>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="grid md:grid-cols-2 gap-4 mt-10">

          <Button
            variant="default"
            iconName="House"
            iconPosition="left"
            className="h-14"
            onClick={() => navigate("/")}
          >
            Back to Dashboard
          </Button>

          <Button
            variant="secondary"
            iconName="Share2"
            iconPosition="left"
            className="h-14"
            onClick={() => alert("Sharing feature coming soon!")}
          >
            Share Achievement
          </Button>

        </div>

      </div>

    </div>
  );
}