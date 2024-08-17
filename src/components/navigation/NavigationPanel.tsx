import StepNav from "../navigation/StepNav";

export default function NavigationPanel() {
  return (
    <div
      className={`flex h-[172px] justify-center gap-x-4 gap-y-8 bg-[url('../../assets/images/bg-sidebar-mobile.svg')] bg-cover bg-center px-8 pt-8 md:h-[568px] md:w-[274px] md:flex-col md:justify-normal md:bg-[url('../../assets/images/bg-sidebar-desktop.svg')] md:pt-10`}
    >
      <StepNav path="/step-1" title="Your Info" />
      <StepNav path="/step-2" title="Select Plan" />
      <StepNav path="/step-3" title="Add-Ons" />
      <StepNav path="/step-4" title="Summary" />
    </div>
  );
}
