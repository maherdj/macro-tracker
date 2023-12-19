import React, { useState } from "react";

export default function FoodCard() {
  return (
    <div className="w-11/12 mx-10 rounded-lg border-2">
      <div className="flow-root pt-2 pl-2">
        <div className="float-left"></div>
        <button
          type="submit"
          value="+"
          className="w-10 rounded-lg float-right mr-6 mb-2 border-2"
        >
          +
        </button>
      </div>
    </div>
  );
}
