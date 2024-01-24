"use client";

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type totalMacros = {
  proteinTotal: number;
  carbsTotal: number;
  fatTotal: number;
};

export type foodProps = {
  uid: number;
  meal: string;
  food: string;
  proteinContent: number | undefined;
  fatContent: number | undefined;
  carbContent: number | undefined;
};

type MacroContext = {
  breakfastMacros: totalMacros;
  setBreakfastMacros: React.Dispatch<React.SetStateAction<totalMacros>>;
  breakfastFoods: foodProps[];
  setBreakfastFoods: React.Dispatch<React.SetStateAction<foodProps[]>>;
  morningSnackFoods: foodProps[];
  setMorningSnackFoods: React.Dispatch<React.SetStateAction<foodProps[]>>;
  lunchFoods: foodProps[];
  setLunchFoods: React.Dispatch<React.SetStateAction<foodProps[]>>;
  afternoonSnackFoods: foodProps[];
  setAfternoonSnackFoods: React.Dispatch<React.SetStateAction<foodProps[]>>;
  dinnerFoods: foodProps[];
  setDinnerFoods: React.Dispatch<React.SetStateAction<foodProps[]>>;
  dessertFoods: foodProps[];
  setDessertFoods: React.Dispatch<React.SetStateAction<foodProps[]>>;
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
  // meal total macro setState Hooks
  const [breakfastMacros, setBreakfastMacros] = useState<totalMacros>({
    proteinTotal: 0,
    carbsTotal: 0,
    fatTotal: 0,
  });

  // meal setState Hooks
  const [breakfastFoods, setBreakfastFoods] = useState<foodProps[]>([]);
  const [morningSnackFoods, setMorningSnackFoods] = useState<foodProps[]>([]);
  const [lunchFoods, setLunchFoods] = useState<foodProps[]>([]);
  const [afternoonSnackFoods, setAfternoonSnackFoods] = useState<foodProps[]>(
    []
  );
  const [dinnerFoods, setDinnerFoods] = useState<foodProps[]>([]);
  const [dessertFoods, setDessertFoods] = useState<foodProps[]>([]);

  // meal content setState Hooks
  const [foodName, setFoodName] = useState<string>("");
  const [protein, setProtein] = useState<number | undefined>(0);

  const [fat, setFat] = useState<number | undefined>(0);
  const [carbs, setCarbs] = useState<number | undefined>(0);

  return (
    <MacroContext.Provider
      value={{
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
