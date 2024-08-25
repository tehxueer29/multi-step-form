import { create } from "zustand";

type PlanStore = {
  plan: object; //TODO: Define the plan object
  isMonthly: boolean;
};

export const usePlanStore = create<PlanStore>((set) => ({
  plan: {},
  isMonthly: true,
}));
