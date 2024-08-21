import { Link } from "react-router-dom";

type GoBackButtonProps = {
  backUrl: string;
};

export default function GoBackButton({ backUrl }: GoBackButtonProps) {
  return (
    <Link to={backUrl} className="text-grey-600 hover:text-primary-900 transition-colors">
      Go Back
    </Link>
  );
}
