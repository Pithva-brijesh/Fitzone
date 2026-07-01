import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

export default function EmptyNotifications() {
  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-10 text-center">

      <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">

        <Icon
          name="BellOff"
          size={40}
          className="text-primary"
        />

      </div>

      <h2 className="text-2xl font-bold text-foreground mb-3">
        You're All Caught Up!
      </h2>

      <p className="text-muted-foreground max-w-lg mx-auto mb-8">
        There are no new notifications at the moment.
        Keep working out and tracking your progress to receive new updates.
      </p>

      <Button
        iconName="RefreshCcw"
        variant="default"
      >
        Refresh Notifications
      </Button>

    </div>
  );
}