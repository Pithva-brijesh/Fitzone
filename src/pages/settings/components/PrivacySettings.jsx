import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

export default function PrivacySettings() {
  const settings = [
    {
      title: "Profile Visibility",
      description: "Allow other users to view your profile.",
      enabled: true,
    },
    {
      title: "Location Access",
      description: "Use your location for nearby fitness suggestions.",
      enabled: false,
    },
    {
      title: "Usage Analytics",
      description: "Help improve FitZone by sharing anonymous usage data.",
      enabled: true,
    },
    {
      title: "Personalized Recommendations",
      description: "Allow AI to personalize workouts and nutrition.",
      enabled: true,
    },
    {
      title: "Data Sharing",
      description: "Share workout statistics with connected services.",
      enabled: false,
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Privacy & Data
          </h2>

          <p className="text-muted-foreground">
            Control how your information is stored and shared.
          </p>
        </div>

        <Icon
          name="Shield"
          size={30}
          className="text-primary"
        />

      </div>

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
              className={`w-14 h-8 rounded-full ${
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

      {/* Export Data */}

      <div className="mt-8 flex justify-end">

        <Button
          variant="outline"
          iconName="Download"
        >
          Download My Data
        </Button>

      </div>

    </div>
  );
}