import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

type StepNavProps = {
  path: string;
  title: string;
};

export default function StepNav({ path, title }: StepNavProps) {
  const location = useLocation();
  const [isActiveUrl, setIsActiveUrl] = useState(true);

  const isLastStep = location.pathname == "/complete" && path == "/step-4";

  useEffect(() => {
    const url = location.pathname;
    setIsActiveUrl(url == path || url == "/complete");
  }, [location, path]);

  return (
    <NavLink
      onClick={(e) => (isActiveUrl ? e.preventDefault() : "")}
      to={path}
      className={`no-underline ${isActiveUrl ? "cursor-default" : ""}`}
    >
      {({ isActive }) => (
        <div className="flex items-center gap-x-4 text-sm uppercase text-white">
          <div
            className={`flex size-9 items-center justify-center rounded-full font-bold ${
              isActive || isLastStep
                ? "bg-primary-500 text-primary-900"
                : "border border-white"
            }`}
          >
            {path.slice(-1)}
          </div>
          <div className="hidden md:block">
            <p className="text-xs opacity-65">Step {path.slice(-1)}</p>
            <p className="font-bold">{title}</p>
          </div>
        </div>
      )}
    </NavLink>
  );
}
