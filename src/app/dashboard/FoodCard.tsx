import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";
import { useMacroContext } from "./context";
import { foodProps } from "./context";
import { BiTrash, BiEdit, BiCheckSquare } from "react-icons/bi";
import useFoodItemModalModal from "./useFoodItemModal";

// function useForceUpdate() {
//   const [value, setValue] = useState<number>(0);
//   return setValue((value) => value + 1);
// }

export default function FoodCard({
  meal,
  food,
  proteinContent,
  fatContent,
  carbContent,
  uid,
  calories,
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

  const { edit, toggleEdit } = useFoodItemModalModal();

  const [editFoodName, setEditFoodName] = useState<string>(food);
  const [editProtein, setEditProtein] = useState<number | undefined>(
    proteinContent
  );
  const [editCarbs, setEditCarbs] = useState<number | undefined>(carbContent);
  const [editFat, setEditFat] = useState<number | undefined>(fatContent);

  // useEffect(() => {
  //   useForceUpdate();
  // }, [edit]);

  const handleDelete = (id: string) => {
    if (meal === "Breakfast") {
      const delFood = breakfastFoods.filter((food) => food.uid !== id);
      setBreakfastFoods([...delFood]);
    }

    if (meal === "Mid-Morning Snack") {
      const delFood = morningSnackFoods.filter((food) => food.uid !== id);
      setMorningSnackFoods([...delFood]);
    }

    if (meal === "Lunch") {
      const delFood = lunchFoods.filter((food) => food.uid !== id);
      setLunchFoods([...delFood]);
    }

    if (meal === "Afternoon Snack") {
      const delFood = afternoonSnackFoods.filter((food) => food.uid !== id);
      setAfternoonSnackFoods([...delFood]);
    }

    if (meal === "Dinner") {
      const delFood = dinnerFoods.filter((food) => food.uid !== id);
      setDinnerFoods([...delFood]);
    }

    if (meal === "Dessert") {
      const delFood = dessertFoods.filter((food) => food.uid !== id);
      setDessertFoods([...delFood]);
    }
  };

  const handleEdit = (id: string, e: React.FormEvent) => {
    e.preventDefault();
    // const uid = uuid();
    // console.log(id);
    // const small_id = uid.slice(0, 8);
    // using if statements to add new entries into respective meal sections. This
    // is probably not the best way to do this. May fix in the future.
    if (meal === "Breakfast") {
      const breakfastFoodsCopy = [...breakfastFoods];
      for (const food in breakfastFoodsCopy) {
        if (breakfastFoodsCopy[food].uid === id) {
          console.log(breakfastFoods[food]);
          breakfastFoodsCopy[food].food = editFoodName;
          breakfastFoodsCopy[food].proteinContent = editProtein;
          breakfastFoodsCopy[food].fatContent = editFat;
          breakfastFoodsCopy[food].carbContent = editCarbs;
        }
      }
      setBreakfastFoods(breakfastFoodsCopy);
    }
    toggleEdit();
  };

  return (
    <>
      {edit ? (
        <div className="w-full col-span-12 h-auto bg-white border-t-2">
          <form
            className="grid grid-cols-12 grid-rows-1 pl-2 gap-y-2 pt-3 pb-3"
            onSubmit={(e) => handleEdit(uid, e)}
          >
            {/* <div className="w-auto col-span-1"></div> */}
            <input
              className="col-span-2 border-2 mr-12 rounded-lg"
              type="text"
              placeholder="Food Name"
              value={editFoodName}
              onChange={(e) => setEditFoodName(e.target.value)}
            ></input>

            <div className="col-span-2 pr-1">
              Protein:
              <input
                className="w-12 border-2 ml-1 rounded-lg"
                type="number"
                value={protein}
                onChange={(e) => setEditProtein(e.target.valueAsNumber)}
                placeholder="in grams"
              ></input>
            </div>
            <div className="w-auto col-span-2 pr-1">
              Fat:
              <input
                className="w-12 border-2 ml-1 rounded-lg"
                type="number"
                onChange={(e) => setEditFat(e.target.valueAsNumber)}
                value={fat}
                placeholder="in grams"
              ></input>
            </div>
            <div className="w-auto col-span-2 pr-1">
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
              className="w-auto col-span-1 justify-self-center mx-2"
              value="submit"
            >
              <BiCheckSquare size="1.5em" />
            </button>
          </form>
        </div>
      ) : (
        <>
          <div className="border-t-2 mb-2 mt-2 ml-5 mr-5"></div>
          <div className="grid grid-cols-12 pt-2 pl-2 pb-2">
            <div className="w-auto col-span-2">{food}</div>
            <div className="w-auto col-span-2">Protein: {proteinContent}g</div>
            <div className="w-auto col-span-2">Fat: {fatContent}g</div>
            <div className="w-auto col-span-2">Carbs: {carbContent}g</div>
            <div className="w-auto col-span-2">Calories: {calories}</div>
            <button
              className="w-auto col-span-1 text-right justify-self-end"
              onClick={toggleEdit}
            >
              <BiEdit size="1.5em" />
            </button>
            <button
              className="w-auto col-span-1 justify-self-center"
              onClick={() => handleDelete(uid)}
            >
              <BiTrash size="1.5em" />
            </button>
          </div>
        </>
      )}
    </>
  );
}
