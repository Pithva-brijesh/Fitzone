import React from "react";
import Icon from "../../../components/AppIcon";

export default function PersonalRecords() {
  const records = [
    {
      title: "Bench Press",
      value: "95 kg",
      icon: "Dumbbell",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "Squat",
      value: "140 kg",
      icon: "Activity",
      color: "text-success",
      bg: "bg-success/10",
    },
    {
      title: "Deadlift",
      value: "170 kg",
      icon: "TrendingUp",
      color: "text-warning",
      bg: "bg-warning/10",
    },
    {
      title: "Longest Workout",
      value: "2h 12m",
      icon: "Clock3",
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Personal Records
          </h2>

          <p className="text-muted-foreground">
            Celebrate your strongest performances
          </p>

        </div>

        <Icon
          name="Trophy"
          size={34}
          className="text-warning"
        />

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {records.map((record) => (

          <div
            key={record.title}
            className="bg-background rounded-2xl p-6 hover:scale-[1.02] transition-all"
          >

            <div className="flex justify-between items-center">

              <div>

                <p className="text-muted-foreground text-sm">
                  {record.title}
                </p>

                <h3 className="text-3xl font-bold text-foreground mt-2">
                  {record.value}
                </h3>

              </div>

              <div
                className={`w-14 h-14 rounded-xl ${record.bg} flex items-center justify-center`}
              >
                <Icon
                  name={record.icon}
                  size={26}
                  className={record.color}
                />
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}