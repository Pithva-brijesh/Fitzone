import React from "react";
import MealCard from "./MealCard";

export default function MealPlanner() {
  const meals = [
    {
      mealName: "Breakfast",
      icon: "Coffee",
      calories: 420,
      protein: 28,
      carbs: 42,
      fat: 12,
      completed: true,
    },
    {
      mealName: "Lunch",
      icon: "UtensilsCrossed",
      calories: 650,
      protein: 45,
      carbs: 58,
      fat: 18,
      completed: true,
    },
    {
      mealName: "Dinner",
      icon: "Soup",
      calories: 580,
      protein: 40,
      carbs: 52,
      fat: 15,
      completed: false,
    },
    {
      mealName: "Snacks",
      icon: "Apple",
      calories: 180,
      protein: 12,
      carbs: 18,
      fat: 5,
      completed: false,
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Today's Meals
          </h2>

          <p className="text-muted-foreground">
            Your nutrition plan for today
          </p>

        </div>

      </div>

      {/* Meal Cards */}

      <div className="grid md:grid-cols-2 gap-6">

        {meals.map((meal) => (

          <MealCard
            key={meal.mealName}
            mealName={meal.mealName}
            icon={meal.icon}
            calories={meal.calories}
            protein={meal.protein}
            carbs={meal.carbs}
            fat={meal.fat}
            completed={meal.completed}
          />

        ))}

      </div>

    </div>
  );
}