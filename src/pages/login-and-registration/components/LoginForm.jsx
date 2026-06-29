import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import SocialLogin from "./SocialLogin";
import Icon from "../../../components/AppIcon";

export default function LoginForm({ onRegister, onForgot }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      <h1 className="text-4xl font-bold font-poppins text-foreground">
        Welcome Back 👋
      </h1>

      <p className="text-muted-foreground mt-2">
        Login to continue your fitness journey.
      </p>

      <form className="space-y-5 mt-8">

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
              placeholder="Enter password"
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

        {/* Remember */}

        <div className="flex justify-between items-center">

          <label className="flex items-center gap-2 text-sm">

            <input type="checkbox" />

            Remember me

          </label>

          <button
            type="button"
            onClick={onForgot}
            className="text-primary text-sm hover:underline"
          >
            Forgot Password?
          </button>

        </div>

        {/* Login */}

        <Button
          className="w-full h-12 rounded-xl"
        >
          Login
        </Button>

      </form>

      <div className="mt-8">

        <SocialLogin />

      </div>

      <div className="mt-8 text-center text-sm">

        Don't have an account?

        <button
          onClick={onRegister}
          className="ml-2 text-primary font-semibold hover:underline"
        >
          Register
        </button>

      </div>

    </div>
  );
}