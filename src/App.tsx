// router
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import YourInfo from "./pages/YourInfo";
import SelectPlan from "./pages/SelectPlan";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";
import ThankYou from "./pages/ThankYou";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          loader: async () => redirect("step-1"),
          element: <YourInfo />,
        },
        {
          path: "step-1",
          element: <YourInfo />,
        },
        {
          path: "step-2",
          element: <SelectPlan />,
        },
        {
          path: "step-3",
          element: <AddOns />,
        },
        {
          path: "step-4",
          element: <Summary />,
        },
        {
          path: "complete",
          element: <ThankYou />,
        },
      ],
    },
  ],
  { basename: "/multi-step-form" },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
