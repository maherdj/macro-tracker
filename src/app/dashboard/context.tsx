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
  proteinContent: number | undefined;
  fatContent: number | undefined;
  carbContent: number | undefined;
};

type MacroContext = {
  foods: foodProps[];
  setFoods: React.Dispatch<React.SetStateAction<foodProps[]>>;
  foodName: string;
  setFoodName: React.Dispatch<React.SetStateAction<string>>;
  protein: number | undefined;
  setProtein: React.Dispatch<React.SetStateAction<number | undefined>>;
  fat: number | undefined;
  setFat: React.Dispatch<React.SetStateAction<number | undefined>>;
  carbs: number | undefined;
  setCarbs: React.Dispatch<React.SetStateAction<number | undefined>>;
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
  const [protein, setProtein] = useState<number | undefined>(0);

  const [fat, setFat] = useState<number | undefined>(0);
  const [carbs, setCarbs] = useState<number | undefined>(0);

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
