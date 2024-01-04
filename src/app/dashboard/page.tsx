"use client";

import { useState } from "react";
import Image from "next/image";
import MealCard from "./MealCard";
import FoodCard from "./FoodCard";

import AddFoodItemModal from "./AddFoodItemModal";
import useFoodItemModalModal from "./useFoodItemModal";

export default function Home() {
  const { isOpen, toggle } = useFoodItemModalModal();
  // const [foods, setFood] = useState([]);

  // const addFood = (food: any) => {
  //   if (!food.text || /^\s*$/.test(food.text)) {
  //     return;
  //   }

  //   const newFood = [food, ...foods];
  // };

  return (
    <>
      <div className="h-96">Header</div>
      <MealCard mealType="Breakfast" />
      <MealCard mealType="Mid-Morning Snack" />
      <MealCard mealType="Lunch" />
      <MealCard mealType="Afternoon Snack" />
      <MealCard mealType="Dinner" />
      <MealCard mealType="Dessert" />
      <AddFoodItemModal isOpen={isOpen} toggle={toggle}></AddFoodItemModal>
    </>
  );
}
