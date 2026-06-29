import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

export default function ForgotPassword({ onBack }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend will be connected later
    setSent(true);
  };

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      <div className="flex items-center gap-3 mb-6">

        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">

          <Icon
            name="KeyRound"
            size={28}
            className="text-primary"
          />

        </div>

        <div>

          <h1 className="text-3xl font-bold text-foreground font-poppins">
            Forgot Password
          </h1>

          <p className="text-muted-foreground">
            We'll send you a password reset link.
          </p>

        </div>

      </div>

      {!sent ? (

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>

            <label className="block text-sm mb-2 text-muted-foreground">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-background border border-border rounded-xl pl-12 pr-4 py-3 text-foreground focus:outline-none focus:border-primary"
                required
              />

            </div>

          </div>

          <Button
            type="submit"
            className="w-full h-12 rounded-xl"
          >
            Send Reset Link
          </Button>

        </form>

      ) : (

        <div className="text-center py-8">

          <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-5">

            <Icon
              name="MailCheck"
              size={40}
              className="text-success"
            />

          </div>

          <h2 className="text-2xl font-bold text-foreground">
            Check Your Email
          </h2>

          <p className="text-muted-foreground mt-3">
            We've sent a password reset link to:
          </p>

          <p className="text-primary font-semibold mt-2">
            {email}
          </p>

        </div>

      )}

      <button
        onClick={onBack}
        className="mt-8 flex items-center gap-2 text-primary hover:underline"
      >

        <Icon
          name="ArrowLeft"
          size={18}
        />

        Back to Login

      </button>

    </div>
  );
}