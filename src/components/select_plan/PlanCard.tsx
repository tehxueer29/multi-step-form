type PlanCardProps = {
  plan: {
    img: string;
    title: string;
    price: number;
  };
  isMonthly: boolean;
};

export default function PlanCard({ plan, isMonthly }: PlanCardProps) {
  return (
    <div className="flex items-start md:block">
      <img src={plan.img} alt="" className="pe-3.5 md:pb-10" />
      <div>
        <p className="font-bold text-primary-900">{plan.title}</p>
        <p className="subtitle pb-0 text-sm">${plan.price}/mo</p>
        {!isMonthly && (
          <p className="text-sm font-medium text-primary-900">2 months free</p>
        )}
      </div>
    </div>
  );
}
