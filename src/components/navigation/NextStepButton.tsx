import { Link } from "react-router-dom";

type NextStepButtonProps = {
  name: string;
  nextUrl: string;
  color: string;
  hoverColor: string;
};

export default function Button({
  name,
  nextUrl,
  color,
  hoverColor,
}: NextStepButtonProps) {
  return (
    <Link
      to={nextUrl}
      className={`rounded ${color} px-4 py-2 text-sm text-white transition-colors ${hoverColor} md:rounded-md md:px-6 md:py-2.5`}
    >
      {name}
    </Link>
  );
}
