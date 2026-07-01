import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/ui/Button";
import SocialLogin from "./SocialLogin";
import Icon from "../../../components/AppIcon";
import useAuth from "../../../hooks/useAuth";

export default function LoginForm({ onRegister, onForgot }) {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      await login(email, password);

      navigate("/dashboard-home");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">
      <h1 className="text-4xl font-bold font-poppins text-foreground">
        Welcome Back 👋
      </h1>

      <p className="text-muted-foreground mt-2">
        Login to continue your fitness journey.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 mt-8">

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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

        {error && (
          <div className="text-red-500 text-sm">
            {error}
          </div>
        )}

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
          type="submit"
          className="w-full h-12 rounded-xl"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>

      <div className="mt-8">
        <SocialLogin />
      </div>

      <div className="mt-8 text-center text-sm">
        Don't have an account?

        <button
          type="button"
          onClick={onRegister}
          className="ml-2 text-primary font-semibold hover:underline"
        >
          Register
        </button>
      </div>
    </div>
  );
}