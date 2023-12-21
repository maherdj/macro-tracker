"use client";

import React, { useState, MouseEvent } from "react";
import { renderToNodeStream } from "react-dom/server";
import Popup from "reactjs-popup";

type Popup = {
  close:() => void;
}

type cardProps = {
  mealType: string;
};

type foodProps = {
  food: string;
  proteinContent: number;
  fatContent: number;
  carbContent: number;
};



export default function Card({ mealType }: cardProps) {
  const [foods, setFoods] = useState<foodProps[]>([]);
  const [foodName, setFoodName] = useState<string>();
  const [protein, setProtein] = useState();

  const [fat, setFat] = useState();
  const [carbs, setCarbs] = useState();

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
  
    setFoods([...foods, { food: foodName, proteinContent: protein, fatContent: fat, carbContent: carbs}])
  }
  // const addFood = (food: string, e: MouseEvent<HTMLButtonElement>) => {};
  return (
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
              <form className="grid grid-cols-3 grid-rows-5 p-5 gap-y-2">
                <div className="w-auto col-span-1">Food Name:</div>
                <input className="col-span-2=" type="text" value={foodName} onChange={(e) => setFoodName(e.target.value)}></input>

                <div className="w-auto col-span-1">Protein (g):</div>
                <input className="col-span-2" value={protein} onChange={(e) => setProtein(e.target.value)}></input>

                <div className="w-auto col-span-1">Carbs (g):</div>
                <input className="col-span-2" value={carbs} onChange={(e) => setCarbs(e.target.value)}></input>

                <div className="w-auto col-span-1">Fat (g):</div>
                <input className="col-span-2"></input>
                <button  type="button" value="Submit"> value={fat} onChange={(e) => setFat(e.target.value)}Submit</button>
              </form>
              {/* </div> */}
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}
