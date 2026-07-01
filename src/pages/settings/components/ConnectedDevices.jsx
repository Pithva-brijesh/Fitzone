import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

export default function ConnectedDevices() {
  const devices = [
    {
      name: "Windows Laptop",
      type: "Desktop App",
      status: "Connected",
      icon: "Monitor",
      color: "text-success",
      bg: "bg-success/10",
    },
    {
      name: "Android Phone",
      type: "Mobile App",
      status: "Connected",
      icon: "Smartphone",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      name: "Smart Watch",
      type: "Wearable",
      status: "Not Connected",
      icon: "Watch",
      color: "text-warning",
      bg: "bg-warning/10",
    },
    {
      name: "Heart Rate Monitor",
      type: "Health Device",
      status: "Not Connected",
      icon: "HeartPulse",
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Connected Devices
          </h2>

          <p className="text-muted-foreground">
            Manage your synced devices and fitness trackers.
          </p>

        </div>

        <Button
          iconName="Plus"
          variant="default"
        >
          Connect Device
        </Button>

      </div>

      <div className="space-y-5">

        {devices.map((device) => (

          <div
            key={device.name}
            className="bg-background rounded-2xl p-5 flex justify-between items-center"
          >

            <div className="flex items-center gap-5">

              <div
                className={`w-14 h-14 rounded-xl ${device.bg} flex items-center justify-center`}
              >
                <Icon
                  name={device.icon}
                  size={26}
                  className={device.color}
                />
              </div>

              <div>

                <h3 className="font-bold text-foreground">
                  {device.name}
                </h3>

                <p className="text-muted-foreground">
                  {device.type}
                </p>

              </div>

            </div>

            <span
              className={`px-4 py-2 rounded-full font-semibold ${
                device.status === "Connected"
                  ? "bg-success/10 text-success"
                  : "bg-warning/10 text-warning"
              }`}
            >
              {device.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}