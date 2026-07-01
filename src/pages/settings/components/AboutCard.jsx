import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

export default function AboutCard() {
  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            About FitZone
          </h2>

          <p className="text-muted-foreground">
            Application information and support.
          </p>

        </div>

        <Icon
          name="Info"
          size={30}
          className="text-primary"
        />

      </div>

      {/* Information */}

      <div className="space-y-5">

        <div className="bg-background rounded-2xl p-5 flex justify-between">
          <span className="font-semibold text-foreground">Version</span>
          <span className="text-muted-foreground">v1.0.0 Beta</span>
        </div>

        <div className="bg-background rounded-2xl p-5 flex justify-between">
          <span className="font-semibold text-foreground">Framework</span>
          <span className="text-muted-foreground">React + Vite</span>
        </div>

        <div className="bg-background rounded-2xl p-5 flex justify-between">
          <span className="font-semibold text-foreground">Developer</span>
          <span className="text-muted-foreground">FitZone Team</span>
        </div>

        <div className="bg-background rounded-2xl p-5 flex justify-between">
          <span className="font-semibold text-foreground">License</span>
          <span className="text-muted-foreground">MIT</span>
        </div>

      </div>

      {/* Buttons */}

      <div className="grid md:grid-cols-3 gap-4 mt-8">

        <Button
          variant="outline"
          iconName="FileText"
        >
          Terms
        </Button>

        <Button
          variant="outline"
          iconName="Shield"
        >
          Privacy
        </Button>

        <Button
          variant="default"
          iconName="Mail"
        >
          Contact
        </Button>

      </div>

      {/* Footer */}

      <div className="mt-8 bg-primary/5 rounded-2xl border border-primary/20 p-5">

        <div className="flex items-center gap-3">

          <Icon
            name="Heart"
            size={22}
            className="text-red-500"
          />

          <p className="text-muted-foreground">
            Built with React, Vite, and modern web technologies to help users
            achieve their fitness goals.
          </p>

        </div>

      </div>

    </div>
  );
}