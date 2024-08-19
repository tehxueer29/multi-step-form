import { NavLink } from "react-router-dom";

type NextStepButtonProps = {
  name: string;
  nextUrl: string;
  color: string;
};

export default function Button({ name, nextUrl, color }: NextStepButtonProps) {
  return (
    <NavLink
      to={nextUrl}
      className={`rounded ${color} px-4 py-2 text-sm text-white md:rounded-md md:px-6 md:py-2.5 hover:bg-primary-800 transition-colors`}
    >
      {name}
    </NavLink>
  );
}
