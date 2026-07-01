import React from "react";
import NotificationCard from "./NotificationCard";

export default function NotificationList() {
  const notifications = [
    {
      id: 1,
      title: "Workout Reminder",
      message: "Time for your Upper Body workout.",
      time: "5 min ago",
      icon: "Dumbbell",
      color: "text-primary",
      bg: "bg-primary/10",
      read: false,
    },
    {
      id: 2,
      title: "Hydration Reminder",
      message: "Drink a glass of water to stay hydrated.",
      time: "25 min ago",
      icon: "Droplets",
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      read: false,
    },
    {
      id: 3,
      title: "Achievement Unlocked",
      message: "You earned the 7-Day Streak badge!",
      time: "1 hour ago",
      icon: "Trophy",
      color: "text-warning",
      bg: "bg-warning/10",
      read: true,
    },
    {
      id: 4,
      title: "XP Earned",
      message: "You gained 120 XP after completing today's workout.",
      time: "3 hours ago",
      icon: "Star",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      read: true,
    },
    {
      id: 5,
      title: "Nutrition Reminder",
      message: "Don't forget to log your dinner.",
      time: "Yesterday",
      icon: "Apple",
      color: "text-success",
      bg: "bg-success/10",
      read: true,
    },
    {
      id: 6,
      title: "Weekly Summary",
      message: "You completed 6 workouts this week. Great job!",
      time: "2 days ago",
      icon: "BarChart3",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      read: true,
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-foreground">
          Recent Notifications
        </h2>

        <p className="text-muted-foreground">
          Stay up to date with your latest activity.
        </p>

      </div>

      {/* List */}

      <div className="space-y-5">

        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            notification={notification}
          />
        ))}

      </div>

    </div>
  );
}