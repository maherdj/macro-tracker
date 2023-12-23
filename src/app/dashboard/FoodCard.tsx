import React, { useState } from "react";
import MealCard from "./MealCard";

type foodProps = {
  food: string;
  proteinContent: number;
  fatContent: number;
  carbContent: number;
};

export default function FoodCard({
  food,
  proteinContent,
  fatContent,
  carbContent,
}: foodProps) {
  return (
    <div className="w-11/12 mx-10 rounded-lg border-2 mt-2">
      <div className="grid grid-cols-6 pt-2 pl-2 pb-2">
        <div className="w-auto col-span-1">{food}</div>
        <div className="w-auto col-span-1">Protein: {proteinContent}g</div>
        <div className="w-auto col-span-1">Fat: {fatContent}g</div>
        <div className="w-auto col-span-1">Carbs: {carbContent}g</div>
        <button className="w-auto col-span-1 text-right justify-end">Edit</button>
        <button className="w-auto col-span-1 justify-end">Delete</button>
      </div>
    </div>
  );
}
