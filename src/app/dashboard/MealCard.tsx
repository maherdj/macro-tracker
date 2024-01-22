"use client";

import React, {
  useState,
  MouseEvent,
  useEffect,
  useContext,
  ReactNode,
} from "react";
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

  function iterateObject(obj: any) {
    let proteinTotal: number = 0;
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        iterateObject(obj[key]);
      } else {
        if (key === "proteinContent") {
          proteinTotal = proteinTotal + obj[key];
          // console.log(proteinTotal);
          // console.log(obj[key]);
        }
      }
    }
  }

  useEffect(() => {
    iterateObject(breakfastFoods);
    console.log("render");
  }, [breakfastFoods]);

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
        {/* after trying to use a switch statement to conditionally render
            the food objects of each meal, I resorted to making separate scripts
            to render the foods in each meal (not the cleanes way to do this) */}

        {breakfastFoods.map((food) => {
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

        {morningSnackFoods.map((food) => {
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

        {lunchFoods.map((food) => {
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

        {afternoonSnackFoods.map((food) => {
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
        {dinnerFoods.map((food) => {
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

        {dessertFoods.map((food) => {
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
