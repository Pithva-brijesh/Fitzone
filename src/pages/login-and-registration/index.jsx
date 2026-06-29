import React, { useState } from "react";

import AuthBanner from "./components/AuthBanner";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ForgotPassword from "./components/ForgotPassword";

export default function LoginAndRegistration() {
  const [screen, setScreen] = useState("login");

  return (
    <div className="min-h-screen bg-background flex">

      {/* Left Side */}

      <div className="hidden lg:flex w-1/2">
        <AuthBanner />
      </div>

      {/* Right Side */}

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">

        <div className="w-full max-w-md">

          {screen === "login" && (
            <LoginForm
              onRegister={() => setScreen("register")}
              onForgot={() => setScreen("forgot")}
            />
          )}

          {screen === "register" && (
            <RegisterForm
              onLogin={() => setScreen("login")}
            />
          )}

          {screen === "forgot" && (
            <ForgotPassword
              onBack={() => setScreen("login")}
            />
          )}

        </div>

      </div>

    </div>
  );
}