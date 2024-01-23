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
  const [proteinTotal, setProteinTotal] = useState<number>(0);
  const [fatTotal, setFatTotal] = useState<number>(0);
  const [carbTotal, setCarbTotal] = useState<number>(0);

  const mealName = mealType;

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

  function iterateObject(obj: any) {
    // let proteinTotal: number = 0;

    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        iterateObject(obj[key]);
      } else {
        // console.log(obj[key]);
        if (key === "proteinContent") {
          setProteinTotal((proteinTotal) => proteinTotal + obj[key]);
        }
        if (key === "fatContent") {
          setFatTotal((fatTotal) => fatTotal + obj[key]);
        }
        if (key === "carbContent") {
          setCarbTotal((carbTotal) => carbTotal + obj[key]);
        }
      }
    }
  }

  useEffect(() => {
    if (mealType === "Breakfast") {
      setProteinTotal(0);
      setCarbTotal(0);
      setFatTotal(0);
      iterateObject(breakfastFoods);
      console.log("render");
    }
    if (mealType === "Mid-Morning Snack") {
      setProteinTotal(0);
      setCarbTotal(0);
      setFatTotal(0);
      iterateObject(morningSnackFoods);
      console.log("render");
    }
    if (mealType === "Lunch") {
      setProteinTotal(0);
      setCarbTotal(0);
      setFatTotal(0);
      iterateObject(lunchFoods);
      console.log("render");
    }
    if (mealType === "Afternoon Snack") {
      setProteinTotal(0);
      setCarbTotal(0);
      setFatTotal(0);
      iterateObject(afternoonSnackFoods);
      console.log("render");
    }
    if (mealType === "Dinner") {
      setProteinTotal(0);
      setCarbTotal(0);
      setFatTotal(0);
      iterateObject(dinnerFoods);
      console.log("render");
    }
    if (mealType === "Dessert") {
      setProteinTotal(0);
      setCarbTotal(0);
      setFatTotal(0);
      iterateObject(dessertFoods);
      console.log("render");
    }
  }, [
    breakfastFoods,
    morningSnackFoods,
    lunchFoods,
    afternoonSnackFoods,
    dinnerFoods,
    dessertFoods,
    proteinTotal,
    fatTotal,
    carbTotal,
  ]);

  const { isOpen, toggle } = useFoodItemModalModal();
  return (
    <>
      <div className="border-t-2 mb-2 mt-2"></div>
      <div className="w-11/12 mx-10 rounded-lg border-2">
        <div className="grid grid-cols-12 grid-rows-1 pt-2 pl-2">
          <div className="col-span-3 text-lg">{mealType}</div>
          <div className="col-span-2 text-lg">{proteinTotal}g Protein</div>
          <div className="col-span-2 text-lg">{fatTotal}g Fat</div>
          <div className="col-span-2 text-lg">{carbTotal}g Carbs</div>
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
