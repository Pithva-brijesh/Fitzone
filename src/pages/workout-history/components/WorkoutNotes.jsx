import React from "react";
import Icon from "../../../components/AppIcon";

export default function WorkoutNotes() {
  const notes = [
    {
      date: "30 June 2026",
      title: "Upper Body Strength",
      note:
        "Increased bench press by 5 kg. Focus on improving incline dumbbell press next session.",
    },
    {
      date: "28 June 2026",
      title: "Leg Day",
      note:
        "Squats felt strong. Need to improve depth and increase hamstring mobility.",
    },
    {
      date: "26 June 2026",
      title: "HIIT Cardio",
      note:
        "Completed all intervals. Cardio endurance is improving steadily.",
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Workout Journal
          </h2>

          <p className="text-muted-foreground">
            Notes from your previous sessions
          </p>

        </div>

        <Icon
          name="NotebookPen"
          size={30}
          className="text-primary"
        />

      </div>

      {/* Notes */}

      <div className="space-y-6">

        {notes.map((item) => (

          <div
            key={item.date}
            className="bg-background rounded-2xl p-6 border border-border hover:border-primary transition-all"
          >

            <div className="flex justify-between items-center mb-3">

              <div>

                <h3 className="font-bold text-lg text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.date}
                </p>

              </div>

              <Icon
                name="CalendarDays"
                size={22}
                className="text-primary"
              />

            </div>

            <p className="text-muted-foreground leading-relaxed">
              {item.note}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}