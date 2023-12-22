"use client";

import React, { useState, MouseEvent } from "react";
import { renderToNodeStream } from "react-dom/server";
import Popup from "reactjs-popup";
import FoodCard from "./FoodCard";

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

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    const uid = Date.now();

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

    console.log(foods);
  };
  // const addFood = (food: string, e: MouseEvent<HTMLButtonElement>) => {};
  return (
    <>
      <div className="w-11/12 mx-10 rounded-lg border-2">
        <div className="flow-root pt-2 pl-2">
          <div className="float-left">{mealType}</div>
          <Popup
            trigger={
              <button
                type="submit"
                value="+"
                className="w-10 rounded-lg float-right mr-6 mb-2 border-2"
                // onClick={() => addFood}
              >
                +
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="w-96 h-96 bg-slate-400">
                <button
                  className="button"
                  onClick={() => {
                    close();
                  }}
                >
                  Close
                </button>
                {/* <div class="min-h-screenflex items-center "> */}
                <form
                  className="grid grid-cols-3 grid-rows-5 p-5 gap-y-2"
                  onSubmit={handleAdd}
                >
                  <div className="w-auto col-span-1">Food Name:</div>
                  <input
                    className="col-span-2"
                    type="text"
                    value={foodName}
                    onChange={(e) => setFoodName(e.target.value)}
                  ></input>

                  <div className="w-auto col-span-1">Protein (g):</div>
                  <input
                    className="col-span-2"
                    value={protein}
                    onChange={(e) => setProtein(e.target.value)}
                  ></input>

                  <div className="w-auto col-span-1">Carbs (g):</div>
                  <input
                    className="col-span-2"
                    value={carbs}
                    onChange={(e) => setCarbs(e.target.value)}
                  ></input>

                  <div className="w-auto col-span-1">Fat (g):</div>
                  <input
                    className="col-span-2"
                    onChange={(e) => setFat(e.target.value)}
                    value={fat}
                  ></input>
                  <button
                    className="w-auto col-span-3"
                    type="sutton"
                    value="submit"
                  >
                    Submit
                  </button>
                </form>
                {/* </div> */}
              </div>
            )}
          </Popup>
        </div>
      </div>

      {foods.map((food) => (
        <FoodCard
          food={food.food}
          proteinContent={food.proteinContent}
          fatContent={food.fatContent}
          carbContent={food.carbContent}
        ></FoodCard>
      ))}
    </>
  );
}
