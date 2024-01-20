"use client";

import React, { useState, MouseEvent, useEffect, useContext } from "react";
import { renderToNodeStream } from "react-dom/server";
import FoodCard from "./FoodCard";
import AddFoodItemModal from "./AddFoodItemModal";
import useFoodItemModalModal from "./useFoodItemModal";
import { useMacroContext } from "./context";
import error from "next/error";

type Popup = {
  close: () => void;
};

type cardProps = {
  mealType: string;
};

type totalMacroContent = {
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
};

type foodProps = {
  uid: number;
  meal: string;
  food: string;
  proteinContent: number;
  fatContent: number;
  carbContent: number;
};

export default function Card({ mealType }: cardProps) {
  const [mealMacros, setMealMacros] = useState<totalMacroContent[]>([]);

  const mealName = mealType;

  const {
    foods,
    setFoods,
    foodName,
    setFoodName,
    protein,
    setProtein,
    fat,
    setFat,
    carbs,
    setCarbs,
  } = useMacroContext();

  function iterateObject(obj: any) {
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        iterateObject(obj[key]);
      } else {
        if (key === "proteinContent") {
          console.log(obj[key]);
        }
      }
    }
  }

  useEffect(() => {
    iterateObject(foods);
  }, [foods]);

  const { isOpen, toggle } = useFoodItemModalModal();
  return (
    <>
      <div className="border-t-2 mb-2 mt-2"></div>
      <div className="w-11/12 mx-10 rounded-lg border-2">
        <div className="grid grid-cols-12 grid-rows-1 pt-2 pl-2">
          <div className="col-span-3 text-lg">{mealType}</div>
          <div className="col-span-2 text-lg">Protein</div>
          <div className="col-span-2 text-lg">Fats</div>
          <div className="col-span-2 text-lg">Carbs</div>
          <div className="col-span-2"></div>
          <button
            type="submit"
            value="+"
            className="w-10 rounded-lg float-r mr-6 mb-2 border-2 text-lg"
            onClick={toggle}
          >
            +
          </button>
        </div>
        {foods.map((food) => {
          return food.meal === mealName ? (
            <FoodCard
              food={food.food}
              proteinContent={food.proteinContent}
              fatContent={food.fatContent}
              carbContent={food.carbContent}
            ></FoodCard>
          ) : (
            <div></div>
          );
        })}
        <AddFoodItemModal
          isOpen={isOpen}
          toggle={toggle}
          mealType={mealType}
        ></AddFoodItemModal>
      </div>
    </>
  );
}
