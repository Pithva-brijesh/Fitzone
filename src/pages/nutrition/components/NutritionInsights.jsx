import React from "react";
import Icon from "../../../components/AppIcon";

export default function NutritionInsights() {
  const insights = [
    {
      icon: "Sparkles",
      color: "text-primary",
      bg: "bg-primary/10",
      title: "Great Protein Intake",
      description:
        "You've reached 82% of your daily protein goal. Keep it up!",
    },
    {
      icon: "Droplets",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      title: "Drink More Water",
      description:
        "You're only at 62% of your hydration goal today.",
    },
    {
      icon: "Apple",
      color: "text-success",
      bg: "bg-success/10",
      title: "Eat More Fruits",
      description:
        "Adding one serving of fruit will improve your micronutrient intake.",
    },
    {
      icon: "TriangleAlert",
      color: "text-warning",
      bg: "bg-warning/10",
      title: "High Sodium",
      description:
        "Today's lunch contains more sodium than recommended.",
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center gap-3 mb-8">

        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">

          <Icon
            name="Brain"
            size={24}
            className="text-primary"
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            AI Nutrition Insights
          </h2>

          <p className="text-muted-foreground">
            Personalized recommendations for today
          </p>

        </div>

      </div>

      <div className="space-y-5">

        {insights.map((item) => (

          <div
            key={item.title}
            className="bg-background rounded-2xl p-5 flex gap-4 hover:scale-[1.02] transition-all"
          >

            <div
              className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}
            >

              <Icon
                name={item.icon}
                size={24}
                className={item.color}
              />

            </div>

            <div>

              <h3 className="font-semibold text-lg text-foreground">

                {item.title}

              </h3>

              <p className="text-muted-foreground mt-1">

                {item.description}

              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}