import React, { useState } from "react";
import MealCard from "./MealCard";
import { useMacroContext } from "./context";
import { foodProps } from "./context";

export default function FoodCard({
  meal,
  food,
  proteinContent,
  fatContent,
  carbContent,
  uid,
}: foodProps) {
  const {
    breakfastMacros,
    setBreakfastMacros,
    breakfastFoods,
    setBreakfastFoods,
    morningSnackFoods,
    setMorningSnackFoods,
    lunchFoods,
    setLunchFoods,
    afternoonSnackFoods,
    setAfternoonSnackFoods,
    dinnerFoods,
    setDinnerFoods,
    dessertFoods,
    setDessertFoods,
    foodName,
    setFoodName,
    protein,
    setProtein,
    fat,
    setFat,
    carbs,
    setCarbs,
  } = useMacroContext();

  const handleDelete = (id: string) => {
    if (meal === "Breakfast") {
      const delFood = breakfastFoods.filter((food) => food.uid !== id);
      setBreakfastFoods([...delFood]);
    }

    if (meal === "Mid-Morning Snack") {
      const delFood = breakfastFoods.filter((food) => food.uid !== id);
      setMorningSnackFoods([...delFood]);
    }

    if (meal === "Lunch") {
      const delFood = breakfastFoods.filter((food) => food.uid !== id);
      setLunchFoods([...delFood]);
    }

    if (meal === "Afternoon Snack") {
      const delFood = breakfastFoods.filter((food) => food.uid !== id);
      setAfternoonSnackFoods([...delFood]);
    }

    if (meal === "Dinner") {
      const delFood = breakfastFoods.filter((food) => food.uid !== id);
      setDinnerFoods([...delFood]);
    }

    if (meal === "Dessert") {
      const delFood = breakfastFoods.filter((food) => food.uid !== id);
      setDessertFoods([...delFood]);
    }
  };

  return (
    <>
      <div className="border-t-2 mb-2 mt-2 ml-5 mr-5"></div>
      <div className="grid grid-cols-6 pt-2 pl-2 pb-2">
        <div className="w-auto col-span-1">{food}</div>
        <div className="w-auto col-span-1">Protein: {proteinContent}g</div>
        <div className="w-auto col-span-1">Fat: {fatContent}g</div>
        <div className="w-auto col-span-1">Carbs: {carbContent}g</div>
        <button className="w-auto col-span-1 text-right justify-end">
          Edit
        </button>
        <button
          className="w-auto col-span-1 justify-end"
          onClick={() => handleDelete(uid)}
        >
          Delete
        </button>
      </div>
    </>
  );
}
