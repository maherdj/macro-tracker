import React, { ReactNode, useState } from "react";
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
  } = useMacroContext();

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
        <div className="w-full col-span-12 h-auto bg-white">
          <form
            className="grid grid-cols-8 grid-rows-1 p-5 gap-y-2"
            onSubmit={handleAdd}
          >
            <input
              className="col-span-1 border-2"
              type="text"
              placeholder="Food Name"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
            ></input>

            <div className="col-span-1 justify-self-end pr-1">Protein</div>
            <input
              className="col-span-1 border-2"
              type="number"
              value={protein}
              onChange={(e) => setProtein(e.target.valueAsNumber)}
              placeholder="in grams"
            ></input>

            <div className="w-auto col-span-1 justify-self-end pr-1">Fat</div>
            <input
              className="col-span-1 border-2"
              type="number"
              onChange={(e) => setFat(e.target.valueAsNumber)}
              value={fat}
              placeholder="in grams"
            ></input>

            <div className="w-auto col-span-1 justify-self-end pr-1">Carbs</div>
            <input
              className="col-span-1 border-2"
              type="number"
              value={carbs}
              onChange={(e) => setCarbs(e.target.valueAsNumber)}
              placeholder="in grams"
            ></input>

            <button
              className="w-auto col-span-1 justify-self-center mx-2"
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
