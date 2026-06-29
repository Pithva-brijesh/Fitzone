import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

export default function EditProfileModal({
  isOpen = true,
  onClose = () => {},
  user = {},
}) {
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    age: user.age || "",
    gender: user.gender || "",
    height: user.height || "",
    weight: user.weight || "",
    goalWeight: user.goalWeight || "",
    level: user.level || "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fields = [
    { label: "Full Name", name: "name", icon: "User" },
    { label: "Email", name: "email", icon: "Mail" },
    { label: "Age", name: "age", icon: "Calendar" },
    { label: "Gender", name: "gender", icon: "Users" },
    { label: "Height (cm)", name: "height", icon: "Ruler" },
    { label: "Weight (kg)", name: "weight", icon: "Weight" },
    { label: "Goal Weight", name: "goalWeight", icon: "Target" },
    { label: "Fitness Level", name: "level", icon: "Award" },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6">

      <div className="bg-card border border-border rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h2 className="text-3xl font-bold text-foreground">
              Edit Profile
            </h2>

            <p className="text-muted-foreground mt-2">
              Update your personal information
            </p>

          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center"
          >
            <Icon name="X" size={22} />
          </button>

        </div>

        {/* Avatar */}

        <div className="flex flex-col items-center mb-8">

          <img
            src={
              user.avatar ||
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
            }
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-primary"
          />

          <Button
            variant="outline"
            className="mt-4"
            iconName="Camera"
          >
            Change Photo
          </Button>

        </div>

        {/* Inputs */}

        <div className="grid md:grid-cols-2 gap-5">

          {fields.map((field) => (

            <div key={field.name}>

              <label className="block mb-2 text-sm text-muted-foreground">

                {field.label}

              </label>

              <div className="relative">

                <Icon
                  name={field.icon}
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />

                <input
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-xl pl-12 pr-4 py-3 text-foreground focus:outline-none focus:border-primary"
                />

              </div>

            </div>

          ))}

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 mt-10">

          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            iconName="Save"
          >
            Save Changes
          </Button>

        </div>

      </div>

    </div>
  );
}