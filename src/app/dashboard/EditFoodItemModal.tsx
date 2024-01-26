"use client";

import React, { useState } from "react";
import { useMacroContext } from "./context";
// import { RiCloseLine } from "react-icons/ri";
import { v4 as uuid } from "uuid";
import { foodProps } from "./context";
import useFoodItemModalModal from "./useFoodItemModal";
import { ReactFormState } from "react-dom/client";

export default function EditFoodItemModal({
  // meal,
  uid,
  food,
  fatContent,
  proteinContent,
  carbContent,
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
  } = useMacroContext();

  const { edit, toggleEdit } = useFoodItemModalModal();

  const [editFoodName, setEditFoodName] = useState<string>(food);
  const [editProtein, setEditProtein] = useState<number | undefined>(
    proteinContent
  );
  const [editCarbs, setEditCarbs] = useState<number | undefined>(carbContent);
  const [editFat, setEditFat] = useState<number | undefined>(fatContent);

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleEdit = (id: string) => {
    // e.preventDefault();
    // const uid = uuid();
    // console.log(id);
    // const small_id = uid.slice(0, 8);
    // using if statements to add new entries into respective meal sections. This
    // is probably not the best way to do this. May fix in the future.
    // if (meal === "Breakfast") {
    //   const breakfastFoodsCopy = [...breakfastFoods];
    //   for (const food in breakfastFoodsCopy) {
    //     console.log(food);
    //   }
    // }
    // console.log(breakfastFoods);
    // console.log(breakfastFoods);
    // if (meal === "Mid-Morning Snack") {
    //   setMorningSnackFoods([
    //     ...morningSnackFoods,
    //     {
    //       uid: id,
    //       meal: meal,
    //       food: foodName,
    //       proteinContent: protein,
    //       fatContent: fat,
    //       carbContent: carbs,
    //     },
    //   ]);
    // }
    // if (meal === "Lunch") {
    //   setLunchFoods([
    //     ...lunchFoods,
    //     {
    //       uid: id,
    //       meal: meal,
    //       food: foodName,
    //       proteinContent: protein,
    //       fatContent: fat,
    //       carbContent: carbs,
    //     },
    //   ]);
    // }
    // if (meal === "Afternoon Snack") {
    //   setAfternoonSnackFoods([
    //     ...afternoonSnackFoods,
    //     {
    //       uid: id,
    //       meal: meal,
    //       food: foodName,
    //       proteinContent: protein,
    //       fatContent: fat,
    //       carbContent: carbs,
    //     },
    //   ]);
    // }
    // if (meal === "Dinner") {
    //   setDinnerFoods([
    //     ...dinnerFoods,
    //     {
    //       uid: id,
    //       meal: meal,
    //       food: foodName,
    //       proteinContent: protein,
    //       fatContent: fat,
    //       carbContent: carbs,
    //     },
    //   ]);
    // }
    // if (meal === "Dessert") {
    //   setDessertFoods([
    //     ...dessertFoods,
    //     {
    //       uid: id,
    //       meal: meal,
    //       food: foodName,
    //       proteinContent: protein,
    //       fatContent: fat,
    //       carbContent: carbs,
    //     },
    //   ]);
    // }
    // setFoodName("");
    // setProtein(0);
    // setFat(0);
    // setCarbs(0);
  };

  // const handleChange = (e) => {

  // }

  return (
    <>
      <div className="w-full col-span-12 h-auto bg-white">
        <form
          className="grid grid-cols-8 grid-rows-1 p-5 gap-y-2"
          onSubmit={() => handleEdit(uid)}
        >
          {/* <div className="w-auto col-span-1"></div> */}
          <input
            className="col-span-1 border-2"
            type="text"
            placeholder="Food Name"
            value={editFoodName}
            onChange={(e) => setEditFoodName(e.target.value)}
          ></input>

          <div className="col-span-1 justify-self-end pr-1">Protein</div>
          <input
            className="col-span-1 border-2"
            type="number"
            value={editProtein}
            onChange={(e) => setEditProtein(e.target.valueAsNumber)}
            placeholder="in grams"
          ></input>

          <div className="w-auto col-span-1 justify-self-end pr-1">Fat</div>
          <input
            className="col-span-1 border-2"
            type="number"
            onChange={(e) => setEditFat(e.target.valueAsNumber)}
            value={editFat}
            placeholder="in grams"
          ></input>

          <div className="w-auto col-span-1 justify-self-end pr-1">Carbs</div>
          <input
            className="col-span-1 border-2"
            type="number"
            value={editCarbs}
            onChange={(e) => setEditCarbs(e.target.valueAsNumber)}
            placeholder="in grams"
          ></input>

          <button
            className="w-auto col-span-1 border-2 rounded-lg mx-2"
            value="submit"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
