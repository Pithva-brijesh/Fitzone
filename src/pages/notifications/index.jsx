import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/ui/Header";

import NotificationHeader from "./components/NotificationHeader";
import NotificationFilters from "./components/NotificationFilters";
import NotificationList from "./components/NotificationList";
import ReminderSettings from "./components/ReminderSettings";
import WeeklySummaryCard from "./components/WeeklySummaryCard";
import AchievementNotification from "./components/AchievementNotification";
import AIRecommendations from "./components/AIRecommendations";
import EmptyNotifications from "./components/EmptyNotifications";

export default function Notifications() {
  const navigate = useNavigate();

  const user = {
    name: "Alex Chen",
    email: "alex@fitzone.com",
    streak: 18,
  };

  return (
    <div className="min-h-screen bg-background">

      <Header
        user={user}
        onNavigate={(path) => navigate(path)}
      />

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">

        <NotificationHeader />

        <NotificationFilters />

        <NotificationList />

        <div className="grid xl:grid-cols-2 gap-8">

          <ReminderSettings />

          <WeeklySummaryCard />

        </div>

        <AchievementNotification />

        <AIRecommendations />

        <EmptyNotifications />

      </main>

    </div>
  );
}