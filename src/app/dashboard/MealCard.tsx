"use client";

import React, { useState, MouseEvent, useEffect } from "react";
import { renderToNodeStream } from "react-dom/server";
import FoodCard from "./FoodCard";
import AddFoodItemModal from "./AddFoodItemModal";
import useFoodItemModalModal from "./useFoodItemModal";

type Popup = {
  close: () => void;
};

type cardProps = {
  mealType: string;
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
  const [foods, setFoods] = useState<foodProps[]>([]);
  const [foodName, setFoodName] = useState<string>("");
  const [protein, setProtein] = useState<number>(0);

  const [fat, setFat] = useState<number>(0);
  const [carbs, setCarbs] = useState<number>(0);

  const [error, setError] = useState<string>("");

  const { isOpen, toggle } = useFoodItemModalModal();

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    handleError();

    const uid = Date.now();

    if (error === "") {
      setFoods([
        ...foods,
        {
          uid: uid,
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

    console.log(foods);
  };

  const handleError = () => {
    if (typeof fat === "number" && fat >= 0) {
    } else {
      setError("Please enter a valid number for fat content");
      console.log("here");
    }

    if (typeof protein === "number" && protein >= 0) {
    } else {
      setError("Please enter a valid number for protein content");
    }

    if (typeof carbs === "number" && carbs >= 0) {
    } else {
      setError("Please enter a valid number for carbs content");
    }
  };

  // const addFood = (food: string, e: MouseEvent<HTMLButtonElement>) => {};
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
          <AddFoodItemModal isOpen={isOpen} toggle={toggle}></AddFoodItemModal>

          {/* <div className="w-96 h-96 bg-white border-4">
                <div className="flow-root">
                  <button
                    onClick={() => {
                      close();
                    }}
                    className="mr-2 p-2 mt-2 rounded-lg border-2 float-right justify-end"
                  >
                    X
                  </button>
                </div>

                <form
                  className="grid grid-cols-3 grid-rows-5 p-5 gap-y-2"
                  onSubmit={handleAdd}
                  // onClick={close()}
                >
                  <div className="w-auto col-span-1">Food Name:</div>
                  <input
                    className="col-span-2 border-2"
                    type="text"
                    value={foodName}
                    onChange={(e) => setFoodName(e.target.value)}
                  ></input>

                  <div className="w-auto col-span-1">Protein (g):</div>
                  <input
                    className="col-span-2 border-2"
                    value={protein}
                    onChange={(e) => setProtein(e.target.value)}
                  ></input>

                  <div className="w-auto col-span-1">Carbs (g):</div>
                  <input
                    className="col-span-2 border-2"
                    value={carbs}
                    onChange={(e) => setCarbs(e.target.value)}
                  ></input>

                  <div className="w-auto col-span-1">Fat (g):</div>
                  <input
                    className="col-span-2 border-2"
                    onChange={(e) => setFat(e.target.value)}
                    value={fat}
                  ></input>
                  <button
                    className="w-auto col-span-3 border-2 rounded-lg mx-20"
                    type="sutton"
                    value="submit"
                  >
                    Submit
                  </button>
                  <div>{error}</div>
                </form>
              </div> */}
        </div>
        {foods.map((food) => (
          <FoodCard
            food={food.food}
            proteinContent={food.proteinContent}
            fatContent={food.fatContent}
            carbContent={food.carbContent}
          ></FoodCard>
        ))}
      </div>
    </>
  );
}
