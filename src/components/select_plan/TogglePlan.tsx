type TogglePlanProps = {
  isMonthly: boolean;
  setIsMonthly: (isMonthly: boolean) => void;
};

export default function TogglePlan({
  isMonthly,
  setIsMonthly,
}: TogglePlanProps) {
  return (
    <div className="flex items-center justify-center gap-4 rounded-lg bg-primary-50 p-3 font-bold">
      <p
        className={`transition-colors ${isMonthly ? "text-primary-900" : "text-grey-600"}`}
      >
        Monthly
      </p>
      <div
        onClick={() => setIsMonthly(!isMonthly)}
        className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-primary-900 px-1"
      >
        <div
          className={`size-3 rounded-full bg-white transition-transform ${!isMonthly && "translate-x-4"}`}
        ></div>
      </div>
      <p
        className={`transition-colors ${!isMonthly ? "text-primary-900" : "text-grey-600"}`}
      >
        Yearly
      </p>
    </div>
  );
}
