import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../AppIcon";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/dashboard-home")}
      className="flex items-center gap-3 mr-8 hover:opacity-90 transition"
    >
      <div className="w-10 h-10 rounded-xl contextual-gradient flex items-center justify-center shadow-lg">
        <Icon
          name="Zap"
          size={22}
          color="white"
        />
      </div>

      <div className="text-left">
        <h1 className="font-poppins text-xl font-bold text-foreground">
          FitZone
        </h1>

        <p className="text-xs text-muted-foreground">
          Train • Track • Transform
        </p>
      </div>
    </button>
  );
}