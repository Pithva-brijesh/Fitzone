import React from "react";
import Icon from "../../../components/AppIcon";

export default function NutritionHeader() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">

        <div>

          <div className="flex items-center gap-3 mb-3">

            <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center">

              <Icon
                name="Apple"
                size={28}
                className="text-success"
              />

            </div>

            <div>

              <h1 className="text-4xl font-bold text-foreground">

                Nutrition Dashboard

              </h1>

              <p className="text-muted-foreground mt-1">

                {today}

              </p>

            </div>

          </div>

          <p className="text-muted-foreground text-lg">

            Track your calories, macros, meals and hydration to
            achieve your fitness goals.

          </p>

        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-background rounded-2xl p-5 text-center">

            <div className="text-3xl font-bold text-success">

              2,150

            </div>

            <div className="text-sm text-muted-foreground">

              Goal Calories

            </div>

          </div>

          <div className="bg-background rounded-2xl p-5 text-center">

            <div className="text-3xl font-bold text-primary">

              4

            </div>

            <div className="text-sm text-muted-foreground">

              Meals Today

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}