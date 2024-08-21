import { AddOn } from "../../pages/AddOns";
import Checkbox from "../UI/Checkbox";

type AddOnCardProps = {
  addOn: AddOn;
  isMonthly: boolean;
};

export default function AddOnCard({ addOn, isMonthly }: AddOnCardProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-3 md:space-x-6 md:ps-3 items-center">
        <Checkbox selected={addOn.selected}/>
        <div>
          <p className="font-bold text-primary-900">{addOn.title}</p>
          <p className="subtitle pb-0 text-sm">{addOn.subtitle}</p>
        </div>
      </div>
      <p className="text-secondary-600">
        +${isMonthly ? `${addOn.price}/mo` : `${addOn.price * 10}/yr`}
      </p>
    </div>
  );
}
