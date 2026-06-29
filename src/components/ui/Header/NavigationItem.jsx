import React from "react";
import Icon from "../../AppIcon";

export default function NavigationItem({
  item,
  active,
  notificationCount = 0,
  onClick,
  mobile = false,
}) {
  return (
    <button
      onClick={() => onClick(item.path)}
      title={item.tooltip}
      className={`
        relative flex items-center
        ${mobile ? "w-full px-4 py-3" : "px-4 py-2"}
        rounded-xl
        transition-all
        duration-300
        font-medium
        ${
          active
            ? "bg-primary text-white shadow-lg"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        }
      `}
    >
      <Icon
        name={item.icon}
        size={18}
      />

      <span className="ml-3 flex-1 text-left">
        {item.label}
      </span>

      {notificationCount > 0 && (
        <span className="ml-2 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-accent px-1 text-xs font-bold text-white">
          {notificationCount > 9 ? "9+" : notificationCount}
        </span>
      )}
    </button>
  );
}