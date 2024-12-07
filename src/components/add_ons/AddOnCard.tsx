import { AddOn } from "../../store/addOnStore";
import { usePlanStore } from "../../store/planStore";
import Checkbox from "../UI/Checkbox";

type AddOnCardProps = {
  addOn: AddOn;
};

export default function AddOnCard({ addOn }: AddOnCardProps) {
  const { isMonthly } = usePlanStore();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3 md:space-x-6 md:ps-3">
        <Checkbox selected={addOn.selected} />
        <div>
          <p className="font-bold text-primary-900">{addOn.title}</p>
          <p className="subtitle pb-0 text-sm">{addOn.subtitle}</p>
        </div>
      </div>
      <p className="text-secondary-600">
        +${addOn.price}
        {isMonthly ? `/mo` : `/yr`}
      </p>
    </div>
  );
}
