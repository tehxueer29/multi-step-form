import { create } from "zustand";

type AddOnStore = {
  addOns: Array<AddOn>;
  setAddOns: (addOn: Array<AddOn>) => void;
};

export type AddOn = {
  title: string;
  subtitle: string;
  price: number;
  selected: boolean;
};

export const defaultAddOns: Array<AddOn> = [
  {
    title: "Online service",
    subtitle: "Access to multiplayer games",
    price: 1,
    selected: true,
  },
  {
    title: "Larger storage",
    subtitle: "Extra 1TB of cloud save",
    price: 2,
    selected: true,
  },
  {
    title: "Customizable profile",
    subtitle: "Custom theme on your profile",
    price: 2,
    selected: false,
  },
];

export const useAddOnStore = create<AddOnStore>((set) => ({
  addOns: defaultAddOns,
  setAddOns: (addOns) => set({ addOns }),
}));
