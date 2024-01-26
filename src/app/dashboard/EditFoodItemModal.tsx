import React, { ReactNode, useState } from "react";
import { useMacroContext } from "./context";
// import { RiCloseLine } from "react-icons/ri";
import { v4 as uuid } from "uuid";
import { foodProps } from "./context";

export default function EditFoodItemModal({
  meal,
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
    foodName,
    setFoodName,
    protein,
    setProtein,
    fat,
    setFat,
    carbs,
    setCarbs,
  } = useMacroContext();

  const handleEdit = (id: string) => {
    // const uid = uuid();

    // const small_id = uid.slice(0, 8);

    // using if statements to add new entries into respective meal sections. This
    // is probably not the best way to do this. May fix in the future.
    if (meal === "Breakfast") {
      const breakfastFoodsCopy = [...breakfastFoods];
      //   for (const food in breakfastFoodsCopy) {
      //     console.log(food);
      //   }
      console.log(breakfastFoods);
    }
    // console.log(breakfastFoods);

    // if (mealType === "Mid-Morning Snack") {
    //   setMorningSnackFoods([
    //     ...morningSnackFoods,
    //     {
    //       uid: small_id,
    //       meal: meal,
    //       food: foodName,
    //       proteinContent: protein,
    //       fatContent: fat,
    //       carbContent: carbs,
    //     },
    //   ]);
    // }

    // if (mealType === "Lunch") {
    //   setLunchFoods([
    //     ...lunchFoods,
    //     {
    //       uid: small_id,
    //       meal: meal,
    //       food: foodName,
    //       proteinContent: protein,
    //       fatContent: fat,
    //       carbContent: carbs,
    //     },
    //   ]);
    // }

    // if (mealType === "Afternoon Snack") {
    //   setAfternoonSnackFoods([
    //     ...afternoonSnackFoods,
    //     {
    //       uid: small_id,
    //       meal: meal,
    //       food: foodName,
    //       proteinContent: protein,
    //       fatContent: fat,
    //       carbContent: carbs,
    //     },
    //   ]);
    // }

    // if (mealType === "Dinner") {
    //   setDinnerFoods([
    //     ...dinnerFoods,
    //     {
    //       uid: small_id,
    //       meal: mealType,
    //       food: foodName,
    //       proteinContent: protein,
    //       fatContent: fat,
    //       carbContent: carbs,
    //     },
    //   ]);
    // }

    // if (mealType === "Dessert") {
    //   setDessertFoods([
    //     ...dessertFoods,
    //     {
    //       uid: small_id,
    //       meal: mealType,
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
        {/* <div className="flow-root">
            {/* //       <button
            onClick={() => {
              close();
            }}
            className="mr-2 p-2 mt-2 rounded-lg border-2 float-right justify-end"
          >
            X
          </button> */}

        <form
          className="grid grid-cols-8 grid-rows-1 p-5 gap-y-2"
          onSubmit={() => handleEdit(uid)}
        >
          {/* <div className="w-auto col-span-1"></div> */}
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
            className="w-auto col-span-1 border-2 rounded-lg mx-2"
            // type="sutton"
            value="submit"
          >
            Submit
          </button>
          {/* <div>{error}</div> */}
        </form>
      </div>
    </>
    //   <div onClick={() => setIsOpen(false)} />
    //
  );
}
