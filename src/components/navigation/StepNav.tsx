import { NavLink } from "react-router-dom";

type StepNavProps = {
  path: string;
  title: string;
};

export default function StepNav({ path, title }: StepNavProps) {
  return (
    <NavLink to={path} className="no-underline">
      {({ isActive }) => (
        <div className="flex items-center gap-x-4 text-sm uppercase text-white">
          <div
            className={`flex size-9 items-center justify-center rounded-full font-bold ${
              isActive
                ? "bg-primary-500 text-primary-900"
                : "border border-white"
            }`}
          >
            {path.slice(-1)}
          </div>
          <div className="hidden md:block">
            <p className="opacity-65 text-xs">Step {path.slice(-1)}</p>
            <p className="font-bold">{title}</p>
          </div>
        </div>
      )}
    </NavLink>
  );
}
