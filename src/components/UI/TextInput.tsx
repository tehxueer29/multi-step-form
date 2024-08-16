type TextInputProps = {
  inputName: string;
  placeholder: string;
};

export default function TextInput({ inputName, placeholder }: TextInputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={inputName} className="pb-1 font-medium text-primary-900">
        {inputName}
      </label>
      <input
        className="rounded-lg border border-grey-500 placeholder:font-medium px-3.5 py-2.5"
        type="text"
        id={inputName}
        name={inputName}
        placeholder={placeholder}
      />
    </div>
  );
}
