import React, { ReactNode, useState } from "react";
import { useMacroContext } from "./context";
// import { RiCloseLine } from "react-icons/ri";

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

export default function AddFoodItemModal(props: ModalType) {
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

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    const uid = Date.now();

    // using if statements to add new entries into respective meal sections. This
    // is probably not the best way to do this. May fix in the future.
    if (props.mealType === "Breakfast") {
      setBreakfastFoods([
        ...breakfastFoods,
        {
          uid: uid,
          meal: props.mealType,
          food: foodName,
          proteinContent: protein,
          fatContent: fat,
          carbContent: carbs,
        },
      ]);
    }
    console.log(breakfastFoods);

    if (props.mealType === "Mid-Morning Snack") {
      setMorningSnackFoods([
        ...morningSnackFoods,
        {
          uid: uid,
          meal: props.mealType,
          food: foodName,
          proteinContent: protein,
          fatContent: fat,
          carbContent: carbs,
        },
      ]);
    }

    if (props.mealType === "Lunch") {
      setLunchFoods([
        ...lunchFoods,
        {
          uid: uid,
          meal: props.mealType,
          food: foodName,
          proteinContent: protein,
          fatContent: fat,
          carbContent: carbs,
        },
      ]);
    }

    if (props.mealType === "Afternoon Snack") {
      setAfternoonSnackFoods([
        ...afternoonSnackFoods,
        {
          uid: uid,
          meal: props.mealType,
          food: foodName,
          proteinContent: protein,
          fatContent: fat,
          carbContent: carbs,
        },
      ]);
    }

    if (props.mealType === "Dinner") {
      setDinnerFoods([
        ...dinnerFoods,
        {
          uid: uid,
          meal: props.mealType,
          food: foodName,
          proteinContent: protein,
          fatContent: fat,
          carbContent: carbs,
        },
      ]);
    }

    if (props.mealType === "Dessert") {
      setDessertFoods([
        ...dessertFoods,
        {
          uid: uid,
          meal: props.mealType,
          food: foodName,
          proteinContent: protein,
          fatContent: fat,
          carbContent: carbs,
        },
      ]);
    }
    // switch (props.mealType) {
    //   case "Breakfast":
    //     return setBreakfastFoods([
    //       ...breakfastFoods,
    //       {
    //         uid: uid,
    //         meal: props.mealType,
    //         food: foodName,
    //         proteinContent: protein,
    //         fatContent: fat,
    //         carbContent: carbs,
    //       },
    //     ]);
    //   case "Mid-Morning Snack":
    //     return setMorningSnackFoods([
    //       ...morningSnackFoods,
    //       {
    //         uid: uid,
    //         meal: props.mealType,
    //         food: foodName,
    //         proteinContent: protein,
    //         fatContent: fat,
    //         carbContent: carbs,
    //       },
    //     ]);
    //   case "Lunch":
    //     return setLunchFoods([
    //       ...lunchFoods,
    //       {
    //         uid: uid,
    //         meal: props.mealType,
    //         food: foodName,
    //         proteinContent: protein,
    //         fatContent: fat,
    //         carbContent: carbs,
    //       },
    //     ]);
    //   case "Afternoon Snack":
    //     return setAfternoonSnackFoods([
    //       ...afternoonSnackFoods,
    //       {
    //         uid: uid,
    //         meal: props.mealType,
    //         food: foodName,
    //         proteinContent: protein,
    //         fatContent: fat,
    //         carbContent: carbs,
    //       },
    //     ]);
    //   case "Dinner":
    //     return setDinnerFoods([
    //       ...dinnerFoods,
    //       {
    //         uid: uid,
    //         meal: props.mealType,
    //         food: foodName,
    //         proteinContent: protein,
    //         fatContent: fat,
    //         carbContent: carbs,
    //       },
    //     ]);
    //   case "Dessert":
    //     return setDessertFoods([
    //       ...dessertFoods,
    //       {
    //         uid: uid,
    //         meal: props.mealType,
    //         food: foodName,
    //         proteinContent: protein,
    //         fatContent: fat,
    //         carbContent: carbs,
    //       },
    //     ]);
    //   default:
    //     return undefined;

    setFoodName("");
    setProtein(0);
    setFat(0);
    setCarbs(0);
  };

  // const handleChange = (e) => {

  // }

  return (
    <>
      {props.isOpen && (
        // <div>
        //   <div>{props.children}</div>
        // </div>
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
            onSubmit={handleAdd}
            onClick={close()}
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

            <div className="w-auto col-span-1 justify-self-end pr-1">Carbs</div>
            <input
              className="col-span-1 border-2"
              type="number"
              value={carbs}
              onChange={(e) => setCarbs(e.target.valueAsNumber)}
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
      )}
    </>
    //   <div onClick={() => setIsOpen(false)} />
    //
  );
}
