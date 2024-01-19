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
    foods,
    setFoods,
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

    // handleError();

    const uid = Date.now();

    // if (error === "") {
    setFoods([
      ...foods,
      {
        uid: uid,
        meal: props.mealType,
        food: foodName,
        proteinContent: protein,
        fatContent: fat,
        carbContent: carbs,
      },
    ]);
    // }

    setFoodName("");
    setProtein(0);
    setFat(0);
    setCarbs(0);

    console.log(foods);
  };

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
              value={protein}
              onChange={(e) => setProtein(e.target.value)}
              placeholder="in grams"
            ></input>

            <div className="w-auto col-span-1 justify-self-end pr-1">Carbs</div>
            <input
              className="col-span-1 border-2"
              value={carbs}
              onChange={(e) => setCarbs(e.target.value)}
              placeholder="in grams"
            ></input>

            <div className="w-auto col-span-1 justify-self-end pr-1">Fat</div>
            <input
              className="col-span-1 border-2"
              onChange={(e) => setFat(e.target.value)}
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
