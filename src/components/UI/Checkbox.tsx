import Checkmark from "/images/icon-checkmark.svg";

type CheckboxProps = {
  selected: boolean;
};

export default function Checkbox({ selected }: CheckboxProps) {
  return (
    <div
      className={`flex size-5 items-center justify-center rounded border border-grey-500 text-white ${selected && "bg-secondary-500"}`}
    >
      <img src={Checkmark} alt="" />
    </div>
  );
}
