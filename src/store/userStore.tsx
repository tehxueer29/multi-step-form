import { create } from "zustand";
import { StoreApi } from "zustand/vanilla";

// types
type State  = {
  name: Input;
  email: Input;
  phone: Input;
};

type Action  = {
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPhone: (value: string) => void;
  isValidatedForm: () => boolean;
}

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
  set: StoreApi<Action>["setState"],
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

const checkForm = (set: StoreApi<Action>["setState"]) => {
  const userInputs = useUserStore.getState();
  let isValid = true;

  for (const key in userInputs) {
    if (typeof userInputs[key as keyof State] !== 'object') {
      break;
    }
    const input = userInputs[key as keyof State] as Input;
    updateState(key, input.val, set)
    
    const updatedInput = useUserStore.getState()[key as keyof State] as Input;
    if (updatedInput.error !== "") {
      isValid = false;
    }
  }
  return isValid;
}

// store
export const useUserStore = create<State & Action>((set) => ({
  name: initialState,
  email: initialState,
  phone: initialState,
  setName: (value: string) => updateState("name", value, set),
  setEmail: (value: string) => updateState("email", value, set),
  setPhone: (value: string) => updateState("phone", value, set),
  isValidatedForm: () => checkForm(set),
}));
