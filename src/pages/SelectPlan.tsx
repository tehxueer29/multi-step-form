// react
import { Dispatch, SetStateAction } from "react";

// components
import PlanCard from "../components/select_plan/PlanCard";
import Card from "../components/UI/Card";

// images
import TogglePlan from "../components/select_plan/TogglePlan";

// store
import { usePlanStore } from "../store/planStore";

export default function SelectPlan() {
  const { plans, setPlans, isMonthly, setIsMonthly } = usePlanStore();

  return (
    <div>
      <h1>Select your plan</h1>
      <p className="subtitle">
        You have the option of monthly or yearly billing.
      </p>
      <div className="grid-cols-none space-y-3 pb-6 md:grid md:grid-cols-3 md:gap-x-4 md:space-y-0 md:pb-8">
        {plans.map((plan, index) => (
          <Card
            key={index}
            selection={plan}
            selections={plans}
            setSelections={setPlans as Dispatch<SetStateAction<Array<object>>>}
          >
            <PlanCard plan={plan} isMonthly={isMonthly} />
          </Card>
        ))}
      </div>
      <TogglePlan isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
    </div>
  );
}
