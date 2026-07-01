import React from "react";
import ReminderCard from "./ReminderCard";

export default function ReminderSettings() {
  const reminders = [
    {
      id: 1,
      title: "Workout Reminder",
      time: "07:00 AM",
      icon: "Dumbbell",
      color: "text-primary",
      bg: "bg-primary/10",
      enabled: true,
    },
    {
      id: 2,
      title: "Water Reminder",
      time: "Every 2 Hours",
      icon: "Droplets",
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      enabled: true,
    },
    {
      id: 3,
      title: "Meal Reminder",
      time: "01:00 PM",
      icon: "Apple",
      color: "text-success",
      bg: "bg-success/10",
      enabled: true,
    },
    {
      id: 4,
      title: "Sleep Reminder",
      time: "10:30 PM",
      icon: "Moon",
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
      enabled: false,
    },
    {
      id: 5,
      title: "Weekly Summary",
      time: "Sunday 08:00 PM",
      icon: "CalendarDays",
      color: "text-warning",
      bg: "bg-warning/10",
      enabled: true,
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-foreground">
          Reminder Settings
        </h2>

        <p className="text-muted-foreground">
          Manage your daily fitness reminders.
        </p>

      </div>

      <div className="space-y-5">

        {reminders.map((reminder) => (
          <ReminderCard
            key={reminder.id}
            reminder={reminder}
          />
        ))}

      </div>

    </div>
  );
}