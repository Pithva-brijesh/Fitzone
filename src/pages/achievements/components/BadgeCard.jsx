import React from "react";
import Icon from "../../../components/AppIcon";

export default function BadgeCard({
  badge,
}) {
  return (
    <div
      className={`morphic-card border rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] ${
        badge.unlocked
          ? "bg-card border-warning/30"
          : "bg-card border-border opacity-80"
      }`}
    >
      {/* Badge Icon */}

      <div className="flex justify-center mb-5">

        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center ${
            badge.unlocked
              ? "bg-warning/10"
              : "bg-muted"
          }`}
        >
          <Icon
            name={badge.icon}
            size={40}
            className={
              badge.unlocked
                ? "text-warning"
                : "text-muted-foreground"
            }
          />
        </div>

      </div>

      {/* Badge Name */}

      <h3 className="text-xl font-bold text-center text-foreground">
        {badge.name}
      </h3>

      <p className="text-sm text-center text-muted-foreground mt-2">
        {badge.description}
      </p>

      {/* XP */}

      <div className="mt-6 flex justify-center">

        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">

          +{badge.xp} XP

        </span>

      </div>

      {/* Status */}

      <div className="mt-6 flex justify-center">

        {badge.unlocked ? (

          <div className="flex items-center gap-2 text-success">

            <Icon
              name="BadgeCheck"
              size={20}
            />

            <span className="font-semibold">

              Unlocked

            </span>

          </div>

        ) : (

          <div className="flex items-center gap-2 text-muted-foreground">

            <Icon
              name="Lock"
              size={20}
            />

            <span>

              Locked

            </span>

          </div>

        )}

      </div>

    </div>
  );
}