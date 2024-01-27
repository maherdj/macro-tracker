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
import { BiPlus } from "react-icons/bi";

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

export default function Card({ mealType }: cardProps) {
  const [mealMacros, setMealMacros] = useState<totalMacroContent[]>([]);
  const [proteinTotal, setProteinTotal] = useState<number>(0);
  const [fatTotal, setFatTotal] = useState<number>(0);
  const [carbTotal, setCarbTotal] = useState<number>(0);
  const [calorieTotal, setCalorieTotal] = useState<number>(0);

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

  function calculateCalories() {
    const totalCalories = carbTotal * 4 + proteinTotal * 4 + fatTotal * 9;
    setCalorieTotal(totalCalories);
  }

  useEffect(() => {
    if (mealType === "Breakfast") {
      setProteinTotal(0);
      setCarbTotal(0);
      setFatTotal(0);
      iterateObject(breakfastFoods);
      calculateCalories();
    }
    if (mealType === "Mid-Morning Snack") {
      setProteinTotal(0);
      setCarbTotal(0);
      setFatTotal(0);
      iterateObject(morningSnackFoods);
      calculateCalories();
    }
    if (mealType === "Lunch") {
      setProteinTotal(0);
      setCarbTotal(0);
      setFatTotal(0);
      iterateObject(lunchFoods);
      calculateCalories();
    }
    if (mealType === "Afternoon Snack") {
      setProteinTotal(0);
      setCarbTotal(0);
      setFatTotal(0);
      iterateObject(afternoonSnackFoods);
      calculateCalories();
    }
    if (mealType === "Dinner") {
      setProteinTotal(0);
      setCarbTotal(0);
      setFatTotal(0);
      iterateObject(dinnerFoods);
      calculateCalories();
    }
    if (mealType === "Dessert") {
      setProteinTotal(0);
      setCarbTotal(0);
      setFatTotal(0);
      iterateObject(dessertFoods);
      calculateCalories();
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
          <div className="col-span-2 text-lg">{mealType}</div>
          <div className="col-span-2 text-base">Protein: {proteinTotal}g</div>
          <div className="col-span-2 text-base">Fat: {fatTotal}g</div>
          <div className="col-span-2 text-base">Carbs: {carbTotal}g</div>
          <div className="col-span-3 text-base">Calories: {calorieTotal}</div>
          <button
            type="submit"
            value="+"
            className="w-6 col-span-1 mb-2 text-base justify-self-center"
            onClick={toggle}
          >
            <BiPlus size="1.5em" />
          </button>
        </div>
        {/* after trying to use a switch statement to conditionally render
            the food objects of each meal, I resorted to making separate scripts
            to render the foods in each meal (not the cleanes way to do this) */}

        {breakfastFoods.map((food) => {
          return food.meal === mealName ? (
            <FoodCard
              uid={food.uid}
              meal={food.meal}
              food={food.food}
              proteinContent={food.proteinContent}
              fatContent={food.fatContent}
              carbContent={food.carbContent}
              calories={food.calories}
            ></FoodCard>
          ) : (
            <div></div>
          );
        })}

        {morningSnackFoods.map((food) => {
          return food.meal === mealName ? (
            <FoodCard
              uid={food.uid}
              meal={food.meal}
              food={food.food}
              proteinContent={food.proteinContent}
              fatContent={food.fatContent}
              carbContent={food.carbContent}
              calories={food.calories}
            ></FoodCard>
          ) : (
            <div></div>
          );
        })}

        {lunchFoods.map((food) => {
          return food.meal === mealName ? (
            <FoodCard
              uid={food.uid}
              meal={food.meal}
              food={food.food}
              proteinContent={food.proteinContent}
              fatContent={food.fatContent}
              carbContent={food.carbContent}
              calories={food.calories}
            ></FoodCard>
          ) : (
            <div></div>
          );
        })}

        {afternoonSnackFoods.map((food) => {
          return food.meal === mealName ? (
            <FoodCard
              uid={food.uid}
              meal={food.meal}
              food={food.food}
              proteinContent={food.proteinContent}
              fatContent={food.fatContent}
              carbContent={food.carbContent}
              calories={food.calories}
            ></FoodCard>
          ) : (
            <div></div>
          );
        })}
        {dinnerFoods.map((food) => {
          return food.meal === mealName ? (
            <FoodCard
              uid={food.uid}
              meal={food.meal}
              food={food.food}
              proteinContent={food.proteinContent}
              fatContent={food.fatContent}
              carbContent={food.carbContent}
              calories={food.calories}
            ></FoodCard>
          ) : (
            <div></div>
          );
        })}

        {dessertFoods.map((food) => {
          return food.meal === mealName ? (
            <FoodCard
              uid={food.uid}
              meal={food.meal}
              food={food.food}
              proteinContent={food.proteinContent}
              fatContent={food.fatContent}
              carbContent={food.carbContent}
              calories={food.calories}
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
