import React from "react";
import { useLocation } from "react-router-dom";
import NavigationItem from "./NavigationItem";

export default function Navigation({
  items,
  notifications,
  onNavigate,
}) {
  const location = useLocation();

  const getNotificationCount = (path) => {
    const counts = {
      "/dashboard-home": notifications?.dashboard || 0,
      "/progress-tracker": notifications?.progress || 0,
      "/notifications": notifications?.notifications || 0,
    };

    return counts[path] || 0;
  };

  return (
    <nav className="hidden md:flex items-center gap-2 flex-1">

      {items.map((item) => (

        <NavigationItem
          key={item.path}
          item={item}
          active={location.pathname === item.path}
          notificationCount={getNotificationCount(item.path)}
          onClick={onNavigate}
        />

      ))}

    </nav>
  );
}