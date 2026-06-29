import React from "react";
import Icon from "../../../components/AppIcon";

export default function AuthBanner() {
  const features = [
    {
      icon: "Dumbbell",
      title: "Personalized Workouts",
      description: "AI-powered workout plans tailored to your goals.",
    },
    {
      icon: "Activity",
      title: "Track Progress",
      description: "Monitor your workouts, calories, and achievements.",
    },
    {
      icon: "Award",
      title: "Earn Rewards",
      description: "Unlock badges, levels, and maintain your streak.",
    },
  ];

  return (
    <div className="relative flex flex-col justify-between w-full h-screen overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 p-12 text-white">

      {/* Background Decorations */}

      <div className="absolute w-80 h-80 bg-white/10 rounded-full -top-20 -left-20 blur-3xl" />

      <div className="absolute w-72 h-72 bg-pink-400/20 rounded-full bottom-0 right-0 blur-3xl" />

      {/* Logo */}

      <div className="relative z-10">

        <div className="flex items-center gap-3">

          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center">

            <Icon
              name="Zap"
              size={30}
              className="text-yellow-300"
            />

          </div>

          <div>

            <h1 className="text-4xl font-extrabold font-poppins">
              FitZone
            </h1>

            <p className="text-white/80">
              Train Smarter. Live Better.
            </p>

          </div>

        </div>

      </div>

      {/* Center */}

      <div className="relative z-10">

        <h2 className="text-5xl font-extrabold leading-tight font-poppins">

          Transform

          <br />

          Your Fitness

          <br />

          Journey

        </h2>

        <p className="mt-6 text-lg text-white/80 max-w-md">

          Join thousands of athletes using FitZone to achieve
          stronger bodies, healthier habits, and consistent progress.

        </p>

        {/* Features */}

        <div className="mt-12 space-y-6">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="flex gap-4 items-start bg-white/10 backdrop-blur-lg rounded-2xl p-5"
            >

              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">

                <Icon
                  name={feature.icon}
                  size={22}
                />

              </div>

              <div>

                <h3 className="font-bold text-lg">

                  {feature.title}

                </h3>

                <p className="text-white/75 text-sm mt-1">

                  {feature.description}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Bottom */}

      <div className="relative z-10">

        <div className="grid grid-cols-3 gap-6">

          <div>

            <h3 className="text-4xl font-bold">
              10K+
            </h3>

            <p className="text-white/70">
              Active Users
            </p>

          </div>

          <div>

            <h3 className="text-4xl font-bold">
              500+
            </h3>

            <p className="text-white/70">
              Exercises
            </p>

          </div>

          <div>

            <h3 className="text-4xl font-bold">
              98%
            </h3>

            <p className="text-white/70">
              Satisfaction
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}