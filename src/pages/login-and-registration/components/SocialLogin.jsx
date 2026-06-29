import React from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

export default function SocialLogin() {
  return (
    <div className="space-y-4">

      {/* Divider */}

      <div className="flex items-center gap-4">

        <div className="flex-1 h-px bg-border" />

        <span className="text-sm text-muted-foreground">
          or continue with
        </span>

        <div className="flex-1 h-px bg-border" />

      </div>

      {/* Google */}

      <Button
        variant="outline"
        className="w-full h-12 rounded-xl justify-center"
      >
        <Icon
          name="Chrome"
          size={20}
          className="mr-3"
        />

        Continue with Google

      </Button>

      {/* Apple */}

      <Button
        variant="outline"
        className="w-full h-12 rounded-xl justify-center"
      >
        <Icon
          name="Apple"
          size={20}
          className="mr-3"
        />

        Continue with Apple

      </Button>

    </div>
  );
}