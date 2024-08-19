import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  selection: any; //TODO: Fix this type
  selections: any[]; //TODO: Fix this type
  setSelection: () => void; //TODO: Fix this type
  isSingleSelection?: boolean;
};

export default function Card({
  children,
  selection,
  selections,
  setSelection,
  isSingleSelection = true,
}: CardProps) {
  const handleClick = () => {
    const newSelection = selections.map((selectedItem) => {
      if (selectedItem == selection && isSingleSelection) {
        selectedItem.selected = true;
      } else if (selectedItem == selection && !isSingleSelection) {
        selectedItem.selected = !selectedItem.selected;
      } else if (isSingleSelection) {
        selectedItem.selected = false;
      }
      
      return selectedItem;
    });

    setSelection(newSelection);
  };

  return (
    <div
      onClick={() => handleClick()}
      className={`border ${selection.selected ? "border-secondary-600 bg-primary-50" : "border-grey-500"} cursor-pointer rounded-md px-3.5 py-5 transition-colors hover:border-secondary-600`}
    >
      {children}
    </div>
  );
}
