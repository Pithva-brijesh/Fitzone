import React from "react";
import Icon from "../../../components/AppIcon";

export default function ReminderCard({ reminder }) {
  return (
    <div className="morphic-card bg-card border border-border rounded-2xl p-6 hover:scale-[1.02] transition-all">

      <div className="flex justify-between items-center">

        {/* Left */}

        <div className="flex items-center gap-4">

          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center ${reminder.bg}`}
          >
            <Icon
              name={reminder.icon}
              size={26}
              className={reminder.color}
            />
          </div>

          <div>

            <h3 className="text-lg font-bold text-foreground">
              {reminder.title}
            </h3>

            <p className="text-muted-foreground">
              Every day at {reminder.time}
            </p>

          </div>

        </div>

        {/* Status */}

        <div
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            reminder.enabled
              ? "bg-success/10 text-success"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {reminder.enabled ? "Enabled" : "Disabled"}
        </div>

      </div>

    </div>
  );
}