import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

export default function AccountSettings() {
  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Account & Security
          </h2>

          <p className="text-muted-foreground">
            Manage your account security and authentication.
          </p>

        </div>

        <Icon
          name="ShieldCheck"
          size={32}
          className="text-success"
        />

      </div>

      <div className="space-y-5">

        {/* Email */}

        <div className="flex justify-between items-center bg-background rounded-2xl p-5">

          <div>

            <h3 className="font-bold text-foreground">
              Email Verification
            </h3>

            <p className="text-muted-foreground">
              alex@fitzone.com
            </p>

          </div>

          <span className="px-4 py-2 rounded-full bg-success/10 text-success font-semibold">
            Verified
          </span>

        </div>

        {/* Password */}

        <div className="flex justify-between items-center bg-background rounded-2xl p-5">

          <div>

            <h3 className="font-bold text-foreground">
              Password
            </h3>

            <p className="text-muted-foreground">
              Last changed 18 days ago
            </p>

          </div>

          <Button
            variant="outline"
            iconName="KeyRound"
          >
            Change Password
          </Button>

        </div>

        {/* Two Factor */}

        <div className="flex justify-between items-center bg-background rounded-2xl p-5">

          <div>

            <h3 className="font-bold text-foreground">
              Two-Factor Authentication
            </h3>

            <p className="text-muted-foreground">
              Add an extra layer of security.
            </p>

          </div>

          <Button
            variant="default"
            iconName="Shield"
          >
            Enable
          </Button>

        </div>

        {/* Sessions */}

        <div className="flex justify-between items-center bg-background rounded-2xl p-5">

          <div>

            <h3 className="font-bold text-foreground">
              Active Sessions
            </h3>

            <p className="text-muted-foreground">
              Windows • Chrome • Active now
            </p>

          </div>

          <Button
            variant="outline"
            iconName="LogOut"
          >
            Sign Out All
          </Button>

        </div>

      </div>

    </div>
  );
}