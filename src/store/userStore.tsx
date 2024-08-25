import { create } from "zustand";
import { StoreApi } from "zustand/vanilla";

// types
type UserStore = {
  name: Input;
  email: Input;
  phone: Input;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPhone: (value: string) => void;
};

export type Input = {
  val: string;
  error: string;
};

// initializations
const initialState: Input = {
  val: "",
  error: "",
};

// updateState is a helper function that updates the state of the input
const updateState = (
  input: string,
  value: string,
  set: StoreApi<UserStore>["setState"],
) => {
  let error = "";

  if (value.length < 1) {
    error = "This field is required";
  } else if (input === "email") {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    error = !emailRegex.test(value) ? "Invalid email address" : "";
  } else if (input === "phone") {
    const phoneRegex =
      /^\+?[0-9]{1,4}[\s-]?[0-9]{1,3}[\s-]?[0-9]{1,4}[\s-]?[0-9]{1,4}$/;
    error = !phoneRegex.test(value) ? "Invalid phone number" : "";
  }

  set({ [input]: { val: value, error: error } });
};

export const useUserStore = create<UserStore>((set) => ({
  name: initialState,
  email: initialState,
  phone: initialState,
  setName: (value: string) => updateState("name", value, set),
  setEmail: (value: string) => updateState("email", value, set),
  setPhone: (value: string) => updateState("phone", value, set),
}));
