import React from "react";
import Icon from "../../../components/AppIcon";

export default function MacroCard({
  title,
  consumed,
  goal,
  unit = "g",
  color = "bg-primary",
  icon = "Activity",
}) {
  const percentage = Math.min((consumed / goal) * 100, 100);

  return (
    <div className="morphic-card bg-card border border-border rounded-2xl p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-5">

        <div>

          <h3 className="text-lg font-semibold text-foreground">
            {title}
          </h3>

          <p className="text-sm text-muted-foreground">
            Daily Target
          </p>

        </div>

        <div
          className={`w-12 h-12 rounded-xl ${color}/10 flex items-center justify-center`}
        >
          <Icon
            name={icon}
            size={22}
            className={color.replace("bg-", "text-")}
          />
        </div>

      </div>

      {/* Progress */}

      <div className="mb-4">

        <div className="flex justify-between mb-2">

          <span className="font-semibold text-foreground">

            {consumed}{unit}

          </span>

          <span className="text-muted-foreground">

            {goal}{unit}

          </span>

        </div>

        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">

          <div
            className={`${color} h-3 rounded-full transition-all duration-700`}
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

      </div>

      {/* Footer */}

      <div className="flex justify-between text-sm">

        <span className="text-muted-foreground">

          Progress

        </span>

        <span className="font-bold text-foreground">

          {Math.round(percentage)}%

        </span>

      </div>

    </div>
  );
}