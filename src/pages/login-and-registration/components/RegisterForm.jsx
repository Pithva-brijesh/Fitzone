import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import SocialLogin from "./SocialLogin";
import Icon from "../../../components/AppIcon";

export default function RegisterForm({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      <h1 className="text-4xl font-bold font-poppins text-foreground">
        Create Account 🚀
      </h1>

      <p className="text-muted-foreground mt-2">
        Join FitZone and start your fitness journey today.
      </p>

      <form className="space-y-5 mt-8">

        {/* Full Name */}

        <div>
          <label className="block mb-2 text-sm text-muted-foreground">
            Full Name
          </label>

          <div className="relative">

            <Icon
              name="User"
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-background border border-border rounded-xl pl-12 pr-4 py-3 text-foreground focus:outline-none focus:border-primary"
            />

          </div>
        </div>

        {/* Email */}

        <div>
          <label className="block mb-2 text-sm text-muted-foreground">
            Email Address
          </label>

          <div className="relative">

            <Icon
              name="Mail"
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-background border border-border rounded-xl pl-12 pr-4 py-3 text-foreground focus:outline-none focus:border-primary"
            />

          </div>
        </div>

        {/* Password */}

        <div>
          <label className="block mb-2 text-sm text-muted-foreground">
            Password
          </label>

          <div className="relative">

            <Icon
              name="Lock"
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              className="w-full bg-background border border-border rounded-xl pl-12 pr-12 py-3 text-foreground focus:outline-none focus:border-primary"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <Icon
                name={showPassword ? "EyeOff" : "Eye"}
                size={18}
                className="text-muted-foreground"
              />
            </button>

          </div>
        </div>

        {/* Confirm Password */}

        <div>
          <label className="block mb-2 text-sm text-muted-foreground">
            Confirm Password
          </label>

          <div className="relative">

            <Icon
              name="Lock"
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full bg-background border border-border rounded-xl pl-12 pr-12 py-3 text-foreground focus:outline-none focus:border-primary"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <Icon
                name={showConfirm ? "EyeOff" : "Eye"}
                size={18}
                className="text-muted-foreground"
              />
            </button>

          </div>
        </div>

        {/* Terms */}

        <label className="flex items-start gap-3 text-sm text-muted-foreground">

          <input
            type="checkbox"
            className="mt-1"
          />

          <span>
            I agree to the <span className="text-primary">Terms of Service</span> and{" "}
            <span className="text-primary">Privacy Policy</span>.
          </span>

        </label>

        {/* Register Button */}

        <Button
          className="w-full h-12 rounded-xl"
        >
          Create Account
        </Button>

      </form>

      <div className="mt-8">

        <SocialLogin />

      </div>

      <div className="mt-8 text-center text-sm">

        Already have an account?

        <button
          onClick={onLogin}
          className="ml-2 text-primary font-semibold hover:underline"
        >
          Login
        </button>

      </div>

    </div>
  );
}