import React from "react";
import Icon from "../../../components/AppIcon";

export default function AppearanceSettings() {
  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Appearance
          </h2>

          <p className="text-muted-foreground">
            Customize how FitZone looks and feels.
          </p>

        </div>

        <Icon
          name="Palette"
          size={32}
          className="text-primary"
        />

      </div>

      <div className="space-y-6">

        {/* Theme */}

        <div className="flex justify-between items-center bg-background rounded-2xl p-5">

          <div>

            <h3 className="font-bold text-foreground">
              Theme
            </h3>

            <p className="text-muted-foreground">
              Choose your preferred appearance.
            </p>

          </div>

          <select className="px-4 py-2 rounded-xl bg-card border border-border">
            <option>System Default</option>
            <option>Light</option>
            <option>Dark</option>
          </select>

        </div>

        {/* Accent Color */}

        <div className="flex justify-between items-center bg-background rounded-2xl p-5">

          <div>

            <h3 className="font-bold text-foreground">
              Accent Color
            </h3>

            <p className="text-muted-foreground">
              Select the primary color for the app.
            </p>

          </div>

          <div className="flex gap-3">

            <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-white cursor-pointer"></div>

          </div>

        </div>

        {/* Font Size */}

        <div className="flex justify-between items-center bg-background rounded-2xl p-5">

          <div>

            <h3 className="font-bold text-foreground">
              Font Size
            </h3>

            <p className="text-muted-foreground">
              Adjust text size throughout the application.
            </p>

          </div>

          <select className="px-4 py-2 rounded-xl bg-card border border-border">
            <option>Small</option>
            <option selected>Medium</option>
            <option>Large</option>
          </select>

        </div>

        {/* Layout */}

        <div className="flex justify-between items-center bg-background rounded-2xl p-5">

          <div>

            <h3 className="font-bold text-foreground">
              Layout Density
            </h3>

            <p className="text-muted-foreground">
              Choose how compact the interface should be.
            </p>

          </div>

          <select className="px-4 py-2 rounded-xl bg-card border border-border">
            <option>Comfortable</option>
            <option>Compact</option>
          </select>

        </div>

      </div>

    </div>
  );
}