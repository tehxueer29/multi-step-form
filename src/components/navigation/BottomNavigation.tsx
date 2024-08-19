import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GoBackButton from "./GoBackButton";
import NextStepButton from "./NextStepButton";

export default function BottomNavigation() {
  const urlHeader = "/step-";
  const location = useLocation();

  const [nextUrl, setNextUrl] = useState(`${urlHeader}1`);
  const [backUrl, setBackUrl] = useState(`${urlHeader}1`);
  const [name, setName] = useState("Next Step");
  const [color, setColor] = useState("bg-primary-900");

  const isFirstStep = backUrl !== "/step-0";
  const showNav = location.pathname !== "/complete";

  useEffect(() => {
    let forwardUrl;
    let btnName;
    let btnColor;

    const currentStep = parseInt(location.pathname.split("-")[1]);
    const backUrl = `${urlHeader}${currentStep - 1}`;

    if (currentStep == 4) {
      forwardUrl = "complete";
      btnName = "Confirm";
      btnColor = "bg-secondary-500";
    } else {
      forwardUrl = `${urlHeader}${currentStep + 1}`;
      btnName = "Next Step";
      btnColor = "bg-primary-900";
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
          <NextStepButton name={name} nextUrl={nextUrl} color={color} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
