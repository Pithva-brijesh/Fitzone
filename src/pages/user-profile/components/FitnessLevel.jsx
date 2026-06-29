import React from "react";
import Icon from "../../../components/AppIcon";

export default function FitnessLevel() {
  const skills = [
    {
      name: "Strength",
      value: 88,
      icon: "Dumbbell",
      color: "bg-primary",
    },
    {
      name: "Cardio",
      value: 72,
      icon: "Heart",
      color: "bg-red-500",
    },
    {
      name: "Endurance",
      value: 81,
      icon: "Activity",
      color: "bg-success",
    },
    {
      name: "Flexibility",
      value: 65,
      icon: "Move",
      color: "bg-warning",
    },
  ];

  const overall =
    Math.round(
      skills.reduce((sum, item) => sum + item.value, 0) /
      skills.length
    );

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center gap-3 mb-8">

        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">

          <Icon
            name="TrendingUp"
            size={24}
            className="text-primary"
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Fitness Level
          </h2>

          <p className="text-muted-foreground">
            Current performance overview
          </p>

        </div>

      </div>

      {/* Overall Score */}

      <div className="bg-primary/10 rounded-2xl p-6 mb-8 text-center">

        <div className="text-5xl font-bold text-primary">

          {overall}%

        </div>

        <div className="text-muted-foreground mt-2">

          Overall Fitness Score

        </div>

      </div>

      {/* Skills */}

      <div className="space-y-6">

        {skills.map((skill) => (

          <div key={skill.name}>

            <div className="flex justify-between items-center mb-2">

              <div className="flex items-center gap-2">

                <Icon
                  name={skill.icon}
                  size={18}
                  className="text-primary"
                />

                <span className="font-medium text-foreground">
                  {skill.name}
                </span>

              </div>

              <span className="font-bold text-foreground">

                {skill.value}%

              </span>

            </div>

            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">

              <div
                className={`${skill.color} h-3 rounded-full transition-all duration-700`}
                style={{
                  width: `${skill.value}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="mt-8 bg-success/10 rounded-2xl p-5 border border-success/20">

        <div className="flex gap-3">

          <Icon
            name="Sparkles"
            size={20}
            className="text-success"
          />

          <div>

            <h4 className="font-semibold text-foreground">

              Coach Feedback

            </h4>

            <p className="text-sm text-muted-foreground mt-2">

              Your strength and endurance are excellent.
              Improving flexibility through stretching or yoga
              can help reduce injury risk and enhance performance.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}