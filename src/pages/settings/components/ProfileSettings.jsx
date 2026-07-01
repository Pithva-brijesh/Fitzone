import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

export default function ProfileSettings() {
  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Profile Information
          </h2>

          <p className="text-muted-foreground">
            Manage your personal details.
          </p>

        </div>

        <Button
          iconName="Pencil"
          variant="default"
        >
          Edit Profile
        </Button>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Avatar */}

        <div className="flex flex-col items-center">

          <div className="w-36 h-36 rounded-full bg-primary/10 flex items-center justify-center">

            <Icon
              name="User"
              size={70}
              className="text-primary"
            />

          </div>

          <Button
            variant="outline"
            iconName="Camera"
            className="mt-5"
          >
            Change Photo
          </Button>

        </div>

        {/* Details */}

        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

          <div>

            <label className="text-sm text-muted-foreground">
              Full Name
            </label>

            <div className="mt-2 p-4 rounded-xl bg-background border border-border">

              Alex Chen

            </div>

          </div>

          <div>

            <label className="text-sm text-muted-foreground">
              Email
            </label>

            <div className="mt-2 p-4 rounded-xl bg-background border border-border">

              alex@fitzone.com

            </div>

          </div>

          <div>

            <label className="text-sm text-muted-foreground">
              Phone
            </label>

            <div className="mt-2 p-4 rounded-xl bg-background border border-border">

              +1 555 123 4567

            </div>

          </div>

          <div>

            <label className="text-sm text-muted-foreground">
              Date of Birth
            </label>

            <div className="mt-2 p-4 rounded-xl bg-background border border-border">

              January 12, 2000

            </div>

          </div>

          <div>

            <label className="text-sm text-muted-foreground">
              Height
            </label>

            <div className="mt-2 p-4 rounded-xl bg-background border border-border">

              180 cm

            </div>

          </div>

          <div>

            <label className="text-sm text-muted-foreground">
              Weight
            </label>

            <div className="mt-2 p-4 rounded-xl bg-background border border-border">

              75 kg

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}