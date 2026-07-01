import React from "react";
import Icon from "../../../components/AppIcon";

export default function NotificationHeader() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

        {/* Left */}

        <div>

          <div className="flex items-center gap-4 mb-4">

            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">

              <Icon
                name="Bell"
                size={32}
                className="text-primary"
              />

            </div>

            <div>

              <h1 className="text-4xl font-bold text-foreground">
                Notifications
              </h1>

              <p className="text-muted-foreground">
                {today}
              </p>

            </div>

          </div>

          <p className="text-lg text-muted-foreground max-w-2xl">

            Stay updated with workouts, reminders, achievements,
            nutrition tips and important fitness alerts.

          </p>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-background rounded-2xl p-5 text-center">

            <div className="text-3xl font-bold text-primary">

              12

            </div>

            <div className="text-sm text-muted-foreground">

              New Alerts

            </div>

          </div>

          <div className="bg-background rounded-2xl p-5 text-center">

            <div className="text-3xl font-bold text-success">

              86

            </div>

            <div className="text-sm text-muted-foreground">

              Read Today

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}