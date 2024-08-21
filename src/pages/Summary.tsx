import { Link } from "react-router-dom";

export default function Summary() {
  return (
    <div>
      <h1>Finishing up</h1>
      <p className="subtitle">
        Double-check everything looks OK before confirming.
      </p>
      <div className="space-y-3 rounded-lg bg-primary-50 p-4 md:space-y-6 md:p-6">
        <div className="flex items-center justify-between text-primary-900">
          <div>
            <p className="font-medium">Dummy Plan</p>
            <Link
              to="/step-2"
              className="subtitle text-sm underline decoration-2"
            >
              Change
            </Link>
          </div>
          <p className="font-bold">price</p>
        </div>
        <hr />
        <div className="space-y-3">
          <div className="flex justify-between">
            <p className="text-sm text-grey-600">dummy addon</p>
            <p className="text-primary-900">price</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-grey-600">dummy addon</p>
            <p className="text-primary-900">price</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-4 md:px-6">
        <p className="text-sm text-grey-600">Total (per month)</p>
        <p className="text-lg font-bold text-secondary-500 md:text-2xl">
          +price
        </p>
      </div>
    </div>
  );
}
