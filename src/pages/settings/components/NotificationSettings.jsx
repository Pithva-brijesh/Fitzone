import React from "react";
import Icon from "../../../components/AppIcon";

export default function NotificationSettings() {
  const settings = [
    {
      title: "Push Notifications",
      description: "Receive notifications on your device.",
      enabled: true,
    },
    {
      title: "Email Notifications",
      description: "Receive important updates by email.",
      enabled: true,
    },
    {
      title: "Workout Reminders",
      description: "Daily reminders for scheduled workouts.",
      enabled: true,
    },
    {
      title: "Hydration Reminders",
      description: "Regular reminders to drink water.",
      enabled: false,
    },
    {
      title: "Achievement Alerts",
      description: "Get notified when you unlock new badges.",
      enabled: true,
    },
    {
      title: "AI Coach Tips",
      description: "Receive personalized fitness recommendations.",
      enabled: true,
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Notification Preferences
          </h2>

          <p className="text-muted-foreground">
            Choose which notifications you want to receive.
          </p>

        </div>

        <Icon
          name="Bell"
          size={30}
          className="text-primary"
        />

      </div>

      {/* Settings */}

      <div className="space-y-5">

        {settings.map((item) => (

          <div
            key={item.title}
            className="bg-background rounded-2xl p-5 flex justify-between items-center"
          >

            <div>

              <h3 className="font-bold text-foreground">
                {item.title}
              </h3>

              <p className="text-muted-foreground">
                {item.description}
              </p>

            </div>

            <button
              className={`w-14 h-8 rounded-full transition-all ${
                item.enabled
                  ? "bg-primary"
                  : "bg-muted"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full mt-1 transition-all ${
                  item.enabled
                    ? "ml-7"
                    : "ml-1"
                }`}
              />
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}