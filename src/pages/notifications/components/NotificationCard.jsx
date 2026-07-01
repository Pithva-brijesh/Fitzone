import React from "react";
import Icon from "../../../components/AppIcon";

export default function NotificationCard({ notification }) {
  return (
    <div
      className={`morphic-card rounded-2xl border p-6 transition-all duration-300 hover:scale-[1.02] ${
        notification.read
          ? "bg-card border-border"
          : "bg-primary/5 border-primary/30"
      }`}
    >
      <div className="flex gap-5">

        {/* Icon */}

        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center ${notification.bg}`}
        >
          <Icon
            name={notification.icon}
            size={26}
            className={notification.color}
          />
        </div>

        {/* Content */}

        <div className="flex-1">

          <div className="flex justify-between items-start">

            <div>

              <h3 className="text-lg font-bold text-foreground">
                {notification.title}
              </h3>

              <p className="text-muted-foreground mt-1">
                {notification.message}
              </p>

            </div>

            {!notification.read && (
              <div className="w-3 h-3 rounded-full bg-primary" />
            )}

          </div>

          <div className="flex justify-between items-center mt-5">

            <span className="text-sm text-muted-foreground">
              {notification.time}
            </span>

            <span
              className={`text-sm font-semibold ${
                notification.read
                  ? "text-success"
                  : "text-primary"
              }`}
            >
              {notification.read ? "Read" : "New"}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}