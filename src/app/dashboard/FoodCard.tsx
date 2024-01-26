import React, { useState } from "react";
import MealCard from "./MealCard";
import { useMacroContext } from "./context";
import { foodProps } from "./context";
import { BiTrash, BiEdit } from "react-icons/bi";
import EditFoodItemModal from "./EditFoodItemModal";
import useFoodItemModalModal from "./useFoodItemModal";

export default function FoodCard({
  meal,
  food,
  proteinContent,
  fatContent,
  carbContent,
  uid,
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

  // const [editFood, setEditFood] = useState<foodProps[]>({

  // })

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

  if (edit) {
    return (
      <EditFoodItemModal
        meal={meal}
        uid={uid}
        proteinContent={proteinContent}
        food={food}
        fatContent={fatContent}
        carbContent={carbContent}
      ></EditFoodItemModal>
    );
  }
  return (
    <>
      <div className="border-t-2 mb-2 mt-2 ml-5 mr-5"></div>
      <div className="grid grid-cols-6 pt-2 pl-2 pb-2">
        <div className="w-auto col-span-1">{food}</div>
        <div className="w-auto col-span-1">Protein: {proteinContent}g</div>
        <div className="w-auto col-span-1">Fat: {fatContent}g</div>
        <div className="w-auto col-span-1">Carbs: {carbContent}g</div>
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
  );
}
