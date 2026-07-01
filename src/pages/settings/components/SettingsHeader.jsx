import React from "react";
import Icon from "../../../components/AppIcon";

export default function SettingsHeader() {
  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

        {/* Left */}

        <div>

          <div className="flex items-center gap-4 mb-4">

            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">

              <Icon
                name="Settings"
                size={34}
                className="text-primary"
              />

            </div>

            <div>

              <h1 className="text-4xl font-bold text-foreground">
                Settings
              </h1>

              <p className="text-muted-foreground">
                Personalize your FitZone experience
              </p>

            </div>

          </div>

          <p className="text-lg text-muted-foreground max-w-2xl">
            Manage your account, privacy, notifications, appearance,
            connected devices, and application preferences.
          </p>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-background rounded-2xl p-5 text-center">

            <div className="text-3xl font-bold text-primary">
              12
            </div>

            <div className="text-sm text-muted-foreground">
              Preferences
            </div>

          </div>

          <div className="bg-background rounded-2xl p-5 text-center">

            <div className="text-3xl font-bold text-success">
              Secure
            </div>

            <div className="text-sm text-muted-foreground">
              Account Status
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}