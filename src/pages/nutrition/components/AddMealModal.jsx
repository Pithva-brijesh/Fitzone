import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

export default function AddMealModal({
  isOpen = true,
  onClose = () => {},
}) {
  const [meal, setMeal] = useState({
    food: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setMeal({
      ...meal,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6">

      <div className="bg-card border border-border rounded-3xl w-full max-w-2xl p-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h2 className="text-3xl font-bold text-foreground">
              Add Meal
            </h2>

            <p className="text-muted-foreground">
              Track your nutrition
            </p>

          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center"
          >
            <Icon name="X" size={22} />
          </button>

        </div>

        {/* Form */}

        <div className="grid md:grid-cols-2 gap-5">

          <input
            name="food"
            placeholder="Food Name"
            value={meal.food}
            onChange={handleChange}
            className="bg-background border border-border rounded-xl px-4 py-3 text-foreground"
          />

          <input
            name="calories"
            placeholder="Calories"
            value={meal.calories}
            onChange={handleChange}
            className="bg-background border border-border rounded-xl px-4 py-3 text-foreground"
          />

          <input
            name="protein"
            placeholder="Protein (g)"
            value={meal.protein}
            onChange={handleChange}
            className="bg-background border border-border rounded-xl px-4 py-3 text-foreground"
          />

          <input
            name="carbs"
            placeholder="Carbs (g)"
            value={meal.carbs}
            onChange={handleChange}
            className="bg-background border border-border rounded-xl px-4 py-3 text-foreground"
          />

          <input
            name="fat"
            placeholder="Fat (g)"
            value={meal.fat}
            onChange={handleChange}
            className="bg-background border border-border rounded-xl px-4 py-3 text-foreground"
          />

          <input
            name="notes"
            placeholder="Notes"
            value={meal.notes}
            onChange={handleChange}
            className="bg-background border border-border rounded-xl px-4 py-3 text-foreground"
          />

        </div>

        {/* Buttons */}

        <div className="flex justify-end gap-4 mt-8">

          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            iconName="Plus"
          >
            Add Meal
          </Button>

        </div>

      </div>

    </div>
  );
}