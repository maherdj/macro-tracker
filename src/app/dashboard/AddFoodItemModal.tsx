import React, { ReactNode, useEffect, useState } from "react";
import { useMacroContext } from "./context";
import { BiCheckSquare } from "react-icons/bi";
// import { RiCloseLine } from "react-icons/ri";
import { v4 as uuid } from "uuid";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  mealType: string;
}

type foodProps = {
  food: string;
  proteinContent: number;
  fatContent: number;
  carbContent: number;
};

export default function AddFoodItemModal({
  isOpen,
  toggle,
  mealType,
}: ModalType) {
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
    calories,
    setCalories,
  } = useMacroContext();

  function calculateCalories() {
    const totalCalories: number | undefined = carbs * 4 + protein * 4 + fat * 9;
    setCalories(totalCalories);
  }

  useEffect(() => {
    calculateCalories();
  }, [carbs, fat, protein]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    const uid = uuid();

    const small_id = uid.slice(0, 8);

    // using if statements to add new entries into respective meal sections. This
    // is probably not the best way to do this. May fix in the future.
    if (mealType === "Breakfast") {
      setBreakfastFoods([
        ...breakfastFoods,
        {
          uid: small_id,
          meal: mealType,
          food: foodName,
          proteinContent: protein,
          fatContent: fat,
          carbContent: carbs,
          calories: calories,
        },
      ]);
    }
    // console.log(breakfastFoods);

    if (mealType === "Mid-Morning Snack") {
      setMorningSnackFoods([
        ...morningSnackFoods,
        {
          uid: small_id,
          meal: mealType,
          food: foodName,
          proteinContent: protein,
          fatContent: fat,
          carbContent: carbs,
          calories: calories,
        },
      ]);
    }

    if (mealType === "Lunch") {
      setLunchFoods([
        ...lunchFoods,
        {
          uid: small_id,
          meal: mealType,
          food: foodName,
          proteinContent: protein,
          fatContent: fat,
          carbContent: carbs,
          calories: calories,
        },
      ]);
    }

    if (mealType === "Afternoon Snack") {
      setAfternoonSnackFoods([
        ...afternoonSnackFoods,
        {
          uid: small_id,
          meal: mealType,
          food: foodName,
          proteinContent: protein,
          fatContent: fat,
          carbContent: carbs,
          calories: calories,
        },
      ]);
    }

    if (mealType === "Dinner") {
      setDinnerFoods([
        ...dinnerFoods,
        {
          uid: small_id,
          meal: mealType,
          food: foodName,
          proteinContent: protein,
          fatContent: fat,
          carbContent: carbs,
          calories: calories,
        },
      ]);
    }

    if (mealType === "Dessert") {
      setDessertFoods([
        ...dessertFoods,
        {
          uid: small_id,
          meal: mealType,
          food: foodName,
          proteinContent: protein,
          fatContent: fat,
          carbContent: carbs,
          calories: calories,
        },
      ]);
    }

    setFoodName("");
    setProtein(0);
    setFat(0);
    setCarbs(0);
    toggle();
  };

  return (
    <>
      {isOpen && (
        <div className="w-full col-span-12 h-auto bg-white border-t-2">
          <form
            className="grid grid-cols-12 grid-rows-1 pl-2 gap-y-2 pt-3 pb-3"
            onSubmit={handleAdd}
          >
            <input
              className="col-span-2 border-2 mr-12 rounded-lg"
              type="text"
              placeholder="Food Name"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
            ></input>

            <div className="col-span-2 pr-1">
              Protein:
              <input
                className="w-12 border-2 ml-1 rounded-lg"
                type="number"
                value={protein}
                onChange={(e) => setProtein(e.target.valueAsNumber)}
                placeholder="in grams"
              ></input>
            </div>

            <div className="col-span-2 pr-1">
              Fat:
              <input
                className="w-12 border-2 ml-1 rounded-lg"
                type="number"
                onChange={(e) => setFat(e.target.valueAsNumber)}
                value={fat}
                placeholder="in grams"
              ></input>
            </div>

            <div className="col-span-2 pr-1">
              Carbs:
              <input
                className="w-12 border-2 ml-1 rounded-lg"
                type="number"
                value={carbs}
                onChange={(e) => setCarbs(e.target.valueAsNumber)}
                placeholder="in grams"
              ></input>
            </div>

            <div className="col-span-3 pr-1 justify-self-start">
              Calories: {calories}
            </div>

            <button
              className="w-auto col-span-1 mx-2 justify-self-center"
              value="submit"
            >
              <BiCheckSquare size="1.5rem" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
