import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

export default function DangerZone() {
  return (
    <div className="morphic-card bg-card border border-red-500/30 rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-red-500">
            Danger Zone
          </h2>

          <p className="text-muted-foreground">
            These actions are permanent and cannot be undone.
          </p>

        </div>

        <Icon
          name="TriangleAlert"
          size={32}
          className="text-red-500"
        />

      </div>

      <div className="space-y-5">

        {/* Logout */}

        <div className="bg-background rounded-2xl p-5 flex justify-between items-center">

          <div>

            <h3 className="font-bold text-foreground">
              Sign Out
            </h3>

            <p className="text-muted-foreground">
              Sign out from this device.
            </p>

          </div>

          <Button
            variant="outline"
            iconName="LogOut"
          >
            Sign Out
          </Button>

        </div>

        {/* Delete */}

        <div className="bg-background rounded-2xl p-5 flex justify-between items-center border border-red-500/20">

          <div>

            <h3 className="font-bold text-red-500">
              Delete Account
            </h3>

            <p className="text-muted-foreground">
              Permanently remove your account and all your data.
            </p>

          </div>

          <Button
            variant="destructive"
            iconName="Trash2"
          >
            Delete Account
          </Button>

        </div>

      </div>

    </div>
  );
}