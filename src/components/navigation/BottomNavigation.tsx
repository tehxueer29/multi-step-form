import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GoBackButton from "./GoBackButton";
import NextStepButton from "./NextStepButton";

type ButtonColor = { color: string; hoverColor: string };

export default function BottomNavigation() {
  const urlHeader: string = "/step-";
  const location = useLocation();

  const [nextUrl, setNextUrl] = useState<string>(`${urlHeader}1`);
  const [backUrl, setBackUrl] = useState<string>(`${urlHeader}1`);
  const [name, setName] = useState<string>("Next Step");
  const [color, setColor] = useState<ButtonColor>({
    color: "bg-primary-900",
    hoverColor: "bg-primary-800",
  });

  const isFirstStep: boolean = backUrl !== "/step-0";
  const showNav: boolean = location.pathname !== "/complete";

  useEffect(() => {
    let forwardUrl: string;
    let btnName: string;
    let btnColor: ButtonColor;

    const currentStep: number = parseInt(location.pathname.split("-")[1]);
    const backUrl: string = `${urlHeader}${currentStep - 1}`;

    if (currentStep == 4) {
      forwardUrl = "complete";
      btnName = "Confirm";
      btnColor = { color: "bg-secondary-500", hoverColor: "hover:bg-secondary-400" };
    } else {
      forwardUrl = `${urlHeader}${currentStep + 1}`;
      btnName = "Next Step";
      btnColor = { color: "bg-primary-900", hoverColor: "hover:bg-primary-800" };
    }

    setName(btnName);
    setColor(btnColor);
    setNextUrl(forwardUrl);
    setBackUrl(backUrl);
  }, [location]);

  return (
    <>
      {showNav ? (
        <div
          className={`fixed bottom-0 start-0 flex w-full items-center bg-white p-4 font-medium md:relative md:p-0 ${isFirstStep ? "justify-between" : "justify-end"}`}
        >
          {isFirstStep && <GoBackButton backUrl={backUrl} />}
          <NextStepButton
            name={name}
            nextUrl={nextUrl}
            color={color.color}
            hoverColor={color.hoverColor}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
