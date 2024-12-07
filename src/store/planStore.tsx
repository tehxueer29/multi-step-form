// zustand
import { create } from "zustand";
import { StoreApi } from "zustand/vanilla";
import { defaultAddOns, useAddOnStore } from "./addOnStore";

// images
import ArcadeImg from "/images/icon-arcade.svg";
import AdvancedImg from "/images/icon-advanced.svg";
import ProImg from "/images/icon-pro.svg";

// types
type PlanStore = {
  plans: Array<Plan>;
  isMonthly: boolean;
  setPlans: (plans: Array<Plan>) => void;
  setIsMonthly: (value: boolean) => void;
};

export type Plan = {
  img: string;
  title: string;
  price: number;
  selected: boolean;
};

// initializations
const defaultPlans: Array<Plan> = [
  { img: ArcadeImg, title: "Arcade", price: 9, selected: true },
  { img: AdvancedImg, title: "Advanced", price: 12, selected: false },
  { img: ProImg, title: "Pro", price: 15, selected: false },
];

// store
export const updatePrices = (
  isMonthly: boolean,
  set: StoreApi<PlanStore>["setState"],
) => {
  // update plan prices
  const { plans } = usePlanStore.getState();

  const updatedPlans = plans.map((plan, index) => ({
    ...plan,
    price: isMonthly
      ? defaultPlans[index].price
      : defaultPlans[index].price * 10,
  }));

  set({ isMonthly, plans: updatedPlans });

  // update add-on prices
  const { addOns, setAddOns } = useAddOnStore.getState();

  const updatedAddOns = addOns.map((addOn, index) => ({
    ...addOn,
    price: isMonthly
      ? defaultAddOns[index].price
      : defaultAddOns[index].price * 10,
  }));

  setAddOns(updatedAddOns);
};

export const usePlanStore = create<PlanStore>((set) => ({
  plans: defaultPlans,
  isMonthly: true,
  setPlans: (plans) => set({ plans }),
  setIsMonthly: (isMonthly) => updatePrices(isMonthly, set),
}));
