import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/ui/Header";

import SettingsHeader from "./components/SettingsHeader";
import ProfileSettings from "./components/ProfileSettings";
import AccountSettings from "./components/AccountSettings";
import AppearanceSettings from "./components/AppearanceSettings";
import NotificationSettings from "./components/NotificationSettings";
import UnitsSettings from "./components/UnitsSettings";
import PrivacySettings from "./components/PrivacySettings";
import ConnectedDevices from "./components/ConnectedDevices";
import AboutCard from "./components/AboutCard";
import DangerZone from "./components/DangerZone";

export default function Settings() {
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

        <SettingsHeader />

        <ProfileSettings />

        <div className="grid xl:grid-cols-2 gap-8">

          <AccountSettings />

          <AppearanceSettings />

        </div>

        <div className="grid xl:grid-cols-2 gap-8">

          <NotificationSettings />

          <UnitsSettings />

        </div>

        <PrivacySettings />

        <ConnectedDevices />

        <AboutCard />

        <DangerZone />

      </main>

    </div>
  );
}