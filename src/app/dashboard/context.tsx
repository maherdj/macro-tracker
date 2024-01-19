"use client";

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type foodProps = {
  uid: number;
  meal: string;
  food: string;
  proteinContent: number;
  fatContent: number;
  carbContent: number;
};

type MacroContext = {
  foods: foodProps[];
  setFoods: React.Dispatch<React.SetStateAction<foodProps[]>>;
  foodName: string;
  setFoodName: React.Dispatch<React.SetStateAction<string>>;
  protein: number;
  setProtein: React.Dispatch<React.SetStateAction<number>>;
  fat: number;
  setFat: React.Dispatch<React.SetStateAction<number>>;
  carbs: number;
  setCarbs: React.Dispatch<React.SetStateAction<number>>;
};

export const MacroContext = createContext<MacroContext | null>(null);

type MacroContextProviderProps = {
  children: React.ReactNode;
};

export default function MacroContextProvider({
  children,
}: MacroContextProviderProps) {
  const [foods, setFoods] = useState<foodProps[]>([]);
  const [foodName, setFoodName] = useState<string>("");
  const [protein, setProtein] = useState<number>();

  const [fat, setFat] = useState<number>(0);
  const [carbs, setCarbs] = useState<number>(0);

  return (
    <MacroContext.Provider
      value={{
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
      }}
    >
      {children}
    </MacroContext.Provider>
  );
}

export function useMacroContext() {
  const context = useContext(MacroContext);
  if (!context) {
    throw new Error("Macro context should be used within MacroContextProvider");
  }
  return context;
}
