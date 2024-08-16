import { Outlet } from "react-router-dom";
import NavigationPanel from "../components/navigation/NavigationPanel";
import BottomNavigation from "../components/navigation/BottomNavigation";

export default function MainLayout() {
  return (
    <div className="h-screen items-center justify-center bg-primary-100 md:flex">
      <div className="rounded-2xl md:flex md:bg-white md:p-4 md:drop-shadow-xl">
        <NavigationPanel />
        <div className="mx-4 relative -top-16 rounded-xl bg-white px-6 py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] md:top-0 md:mx-0 md:w-[650px]  md:px-24 md:pt-11 md:shadow-none">
          <div className="flex h-full flex-col justify-between">
            <Outlet />
            <BottomNavigation />
          </div>
        </div>
      </div>
    </div>
  );
}
