import { Link } from "react-router-dom";
import { usePlanStore } from "../store/planStore";
import { useAddOnStore } from "../store/addOnStore";
import { AddOn } from "../store/addOnStore";

export default function Summary() {
  const { plans, isMonthly } = usePlanStore();
  const { addOns } = useAddOnStore();

  const selectedPlan = plans.find((plan) => plan.selected);
  const selectedAddOns = addOns.filter((addOn) => addOn.selected);
  const totalPrice =
    selectedPlan!.price +
    selectedAddOns.reduce((acc, addOn) => acc + addOn.price, 0);

  const priceDescription = isMonthly ? `/mo` : `/yr`;

  return (
    <div>
      <h1>Finishing up</h1>
      <p className="subtitle">
        Double-check everything looks OK before confirming.
      </p>
      <div className="space-y-3 rounded-lg bg-primary-50 p-4 md:space-y-6 md:p-6">
        <div className="flex items-center justify-between text-primary-900">
          <div>
            <p className="font-medium">
              {selectedPlan!.title} ({isMonthly ? "Monthly" : "Yearly"})
            </p>
            <Link
              to="/step-2"
              className="subtitle text-sm underline decoration-2"
            >
              Change
            </Link>
          </div>
          <p className="font-bold">
            ${selectedPlan!.price}
            {priceDescription}
          </p>
        </div>
        {selectedAddOns.length > 0 && (
          <>
            <hr />
            <div className="space-y-3">
              {selectedAddOns.map((addOn: AddOn) => (
                <div className="flex justify-between" key={addOn.title}>
                  <p className="text-sm text-grey-600">{addOn.title}</p>
                  <p className="text-primary-900">
                    +${addOn.price}
                    {priceDescription}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="flex items-center justify-between px-4 py-4 md:px-6">
        <p className="text-sm text-grey-600">
          Total (per {isMonthly ? "month" : "year"})
        </p>
        <p className="text-lg font-bold text-secondary-500 md:text-2xl">
          +${totalPrice}
          {priceDescription}
        </p>
      </div>
    </div>
  );
}
