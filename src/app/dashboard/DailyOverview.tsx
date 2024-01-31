"use client";

import { PieChart } from "@mui/x-charts";
import React, { useEffect, useState } from "react";
import { useMacroContext } from "./context";

export default function DailyOverview() {
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
    calories,
    setCalories,
  } = useMacroContext();
  const data = [
    { label: "Group A", value: 400 },
    { label: "Group B", value: 300 },
    { label: "Group C", value: 300 },
    { label: "Group D", value: 200 },
  ];

  const [dailyProtein, setDailyProtein] = useState<number>(0);

  const [dailyFat, setDailyFat] = useState<number>(0);
  const [dailyCarbs, setDailyCarbs] = useState<number>(0);
  const [dailyCalories, setDailyCalories] = useState<number>(0);

  useEffect(() => {
    let protein: number = 0;
    let carbs: number = 0;
    let fats: number = 0;
    let cals: number = 0;

    breakfastFoods.map((food) => {
      protein = protein + food.proteinContent;
      carbs = carbs + food.carbContent;
      fats = fats + food.fatContent;
      cals = cals + food.calories;
    });

    morningSnackFoods.map((food) => {
      protein = protein + food.proteinContent;
      carbs = carbs + food.carbContent;
      fats = fats + food.fatContent;
      cals = cals + food.calories;
    });

    lunchFoods.map((food) => {
      protein = protein + food.proteinContent;
      carbs = carbs + food.carbContent;
      fats = fats + food.fatContent;
      cals = cals + food.calories;
    });

    afternoonSnackFoods.map((food) => {
      protein = protein + food.proteinContent;
      carbs = carbs + food.carbContent;
      fats = fats + food.fatContent;
      cals = cals + food.calories;
    });

    dinnerFoods.map((food) => {
      protein = protein + food.proteinContent;
      carbs = carbs + food.carbContent;
      fats = fats + food.fatContent;
      cals = cals + food.calories;
    });

    dessertFoods.map((food) => {
      protein = protein + food.proteinContent;
      carbs = carbs + food.carbContent;
      fats = fats + food.fatContent;
      cals = cals + food.calories;
    });

    setDailyProtein(protein);
    setDailyCarbs(carbs);
    setDailyFat(fats);
    setDailyCalories(cals);
  }, [
    breakfastFoods,
    morningSnackFoods,
    lunchFoods,
    afternoonSnackFoods,
    dinnerFoods,
    dessertFoods,
  ]);
  return (
    <div className="flex items-center justify-center p-7 m-7 border-4  rounded-xl ">
      <PieChart
        series={[
          {
            data,
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 90,
            cx: 300,
            cy: 200,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: 0, color: "gray" },
          },
        ]}
        margin={{ right: 5 }}
        width={600}
        height={400}
        slotProps={{
          legend: { hidden: true },
        }}
      />
    </div>
  );
}
