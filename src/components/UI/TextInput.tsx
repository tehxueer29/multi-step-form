import { Input } from "../../store/userStore";
import { useEffect, useRef, useState } from "react";

type TextInputProps = {
  inputName: string;
  placeholder: string;
  state: Input;
  updateState: (value: string) => void;
};

export default function TextInput({
  inputName,
  placeholder,
  state,
  updateState,
}: TextInputProps) {
  const { val, error } = state;
  const [tempValue, setTempValue] = useState<string>(val);

  // only run the callback after the first render reference: https://stackoverflow.com/a/74073310
  const isMount = useRef(false);

  // debounce hook reference: https://stackoverflow.com/a/72672732
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
    } else {
      // Wait 1000 ms before copying the value of tempValue into value;
      const timeout = setTimeout(() => {
        updateState(tempValue);
      }, 1000);

      // If the hook is called again, cancel the previous timeout
      // This creates a debounce instead of a delay
      return () => clearTimeout(timeout);
    }
  }, [tempValue, updateState]);

  return (
    <div className="flex flex-col">
      <label
        htmlFor={inputName}
        className="flex justify-between pb-1 text-sm font-medium text-primary-900"
      >
        <p>{inputName}</p>
        <p className="font-bold text-red-400">{error}</p>
      </label>
      <input
        className={`rounded-lg border px-3.5 py-2.5 font-medium text-primary-900 transition-colors placeholder:font-medium focus:outline-none ${error ? "border-red-500 hover:border-red-600 focus:border-red-600" : "border-grey-500 hover:border-secondary-600 focus:border-secondary-600"}`}
        type="text"
        id={inputName}
        name={inputName}
        placeholder={placeholder}
        value={tempValue}
        onChange={(e) => {
          setTempValue(e.target.value);
        }}
      />
    </div>
  );
}
