import { useState } from "react";

// components
import PlanCard from "../components/select_plan/PlanCard";
import Card from "../components/UI/Card";

// images
import ArcadeImg from "/images/icon-arcade.svg";
import AdvancedImg from "/images/icon-advanced.svg";
import ProImg from "/images/icon-pro.svg";
import TogglePlan from "../components/select_plan/TogglePlan";

export default function SelectPlan() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [plans, setPlans] = useState([
    { img: ArcadeImg, title: "Arcade", price: 9, selected: true },
    { img: AdvancedImg, title: "Advanced", price: 12, selected: false },
    { img: ProImg, title: "Pro", price: 15, selected: false },
  ]);

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
            setSelection={setPlans}
          >
            <PlanCard plan={plan} isMonthly={isMonthly} />
          </Card>
        ))}
      </div>
      <TogglePlan isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
    </div>
  );
}
