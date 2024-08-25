import { create } from "zustand";

type AddOnStore = {
  addOn: object; //TODO: Define the addOn object
};

export const useAddOnStore = create<AddOnStore>((set) => ({
  addOn: {},
}));
