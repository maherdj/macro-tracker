"use client";

import React, { useState, MouseEvent } from "react";
import Popup from "reactjs-popup";

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
  // const [foods, setFoods] = useState<string[]>([]);

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
              <form className="grid grid-cols-3 grid-rows-4 p-5 gap-y-2">
                <div className="w-auto col-span-1">Food Name:</div>
                <input className="col-span-2"></input>

                <div className="w-auto col-span-1">Protein (g):</div>
                <input className="col-span-2"></input>

                <div className="w-auto col-span-1">Carbs (g):</div>
                <input className="col-span-2"></input>

                <div className="w-auto col-span-1">Fat (g):</div>
                <input className="col-span-2"></input>
              </form>
              {/* </div> */}
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}
