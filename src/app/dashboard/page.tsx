// import { useState } from "react";
import Image from "next/image";
import MealCard from "./MealCard";
import FoodCard from "./FoodCard";

import { useState } from "react";
import MacroContextProvider from "./context";
import DailyOverview from "./DailyOverview";

type foodProps = {
  uid: number;
  meal: string;
  food: string;
  proteinContent: number;
  fatContent: number;
  carbContent: number;
};

export default function Home() {
  return (
    <>
      <MacroContextProvider>
        <div>
          <DailyOverview />
        </div>
        <MealCard mealType="Breakfast" />
        <MealCard mealType="Mid-Morning Snack" />
        <MealCard mealType="Lunch" />
        <MealCard mealType="Afternoon Snack" />
        <MealCard mealType="Dinner" />
        <MealCard mealType="Dessert" />
      </MacroContextProvider>
    </>
  );
}
