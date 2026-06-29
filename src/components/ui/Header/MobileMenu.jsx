import React from "react";
import NavigationItem from "./NavigationItem";
import Button from "../Button";

export default function MobileMenu({
  open,
  items,
  notifications,
  onNavigate,
  user,
}) {
  if (!open) return null;

  const getNotificationCount = (path) => {
    const counts = {
      "/dashboard-home": notifications?.dashboard || 0,
      "/progress-tracker": notifications?.progress || 0,
      "/notifications": notifications?.notifications || 0,
    };

    return counts[path] || 0;
  };

  return (
    <div className="md:hidden border-t border-border bg-card">

      <div className="p-4 space-y-2">

        {items.map((item) => (

          <NavigationItem
            key={item.path}
            item={item}
            mobile
            active={false}
            notificationCount={getNotificationCount(item.path)}
            onClick={onNavigate}
          />

        ))}

        {!user && (
          <Button
            className="w-full mt-4"
            iconName="LogIn"
            onClick={() => onNavigate("/login")}
          >
            Login
          </Button>
        )}

      </div>

    </div>
  );
}