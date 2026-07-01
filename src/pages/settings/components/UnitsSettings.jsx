import React from "react";
import Icon from "../../../components/AppIcon";

export default function UnitsSettings() {
  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Units & Preferences
          </h2>

          <p className="text-muted-foreground">
            Choose your preferred measurement units.
          </p>

        </div>

        <Icon
          name="Ruler"
          size={30}
          className="text-primary"
        />

      </div>

      <div className="space-y-5">

        <div className="flex justify-between items-center bg-background rounded-2xl p-5">
          <div>
            <h3 className="font-bold text-foreground">Height</h3>
            <p className="text-muted-foreground">Preferred height unit</p>
          </div>

          <select className="px-4 py-2 rounded-xl bg-card border border-border">
            <option>Centimeters (cm)</option>
            <option>Feet (ft)</option>
          </select>
        </div>

        <div className="flex justify-between items-center bg-background rounded-2xl p-5">
          <div>
            <h3 className="font-bold text-foreground">Weight</h3>
            <p className="text-muted-foreground">Preferred weight unit</p>
          </div>

          <select className="px-4 py-2 rounded-xl bg-card border border-border">
            <option>Kilograms (kg)</option>
            <option>Pounds (lbs)</option>
          </select>
        </div>

        <div className="flex justify-between items-center bg-background rounded-2xl p-5">
          <div>
            <h3 className="font-bold text-foreground">Distance</h3>
            <p className="text-muted-foreground">Running and walking distance</p>
          </div>

          <select className="px-4 py-2 rounded-xl bg-card border border-border">
            <option>Kilometers (km)</option>
            <option>Miles</option>
          </select>
        </div>

        <div className="flex justify-between items-center bg-background rounded-2xl p-5">
          <div>
            <h3 className="font-bold text-foreground">Water Intake</h3>
            <p className="text-muted-foreground">Daily hydration unit</p>
          </div>

          <select className="px-4 py-2 rounded-xl bg-card border border-border">
            <option>Milliliters (ml)</option>
            <option>Fluid Ounces (oz)</option>
          </select>
        </div>

        <div className="flex justify-between items-center bg-background rounded-2xl p-5">
          <div>
            <h3 className="font-bold text-foreground">Temperature</h3>
            <p className="text-muted-foreground">Weather and body temperature</p>
          </div>

          <select className="px-4 py-2 rounded-xl bg-card border border-border">
            <option>Celsius (°C)</option>
            <option>Fahrenheit (°F)</option>
          </select>
        </div>

      </div>

    </div>
  );
}