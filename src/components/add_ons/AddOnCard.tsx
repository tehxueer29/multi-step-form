import { AddOn } from "../../pages/AddOns";
import Checkbox from "../UI/Checkbox";

type AddOnCardProps = {
  addOn: AddOn;
  isMonthly: boolean;
};

export default function AddOnCard({ addOn, isMonthly }: AddOnCardProps) {
  return (
    <div className="flex justify-between">
      <div className="flex space-x-6">
        <Checkbox />
        <div className="">
          <p className="font-bold text-primary-900">{addOn.title}</p>
          <p className="subtitle pb-0">{addOn.subtitle}</p>
        </div>
      </div>
      <p className="text-secondary-500">
        +${isMonthly ? addOn.price : addOn.price * 10}/mo
      </p>
    </div>
  );
}
