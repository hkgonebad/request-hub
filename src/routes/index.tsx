import { createHashRouter } from "react-router-dom";

// Layouts
import AuthLayout from "@/layouts/Auth";
import DashboardLayout from "@/layouts/Dashboard";

// Pages
import Login from "@/pages/Auth/Login";
import Home from "@/pages/Home";

import ErrorPage from "@/pages/ErrorPage";
import ExistingFormsPage from "@/pages/ExisitingForms";
import RequestsPage from "@/pages/Requests";
import Dashboard from "@/pages/Dashboard";
import ViewRequest from "@/pages/Requests/View";
import DashboardSpoc from "@/pages/Dashboard/DashboardSpoc";
import ReportsPage from "@/pages/Reports";
import Profile from "@/pages/Profile";
import Notifications from "@/pages/Notifications";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
      ],
    },
    {
      element: <DashboardLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/dashboard-spoc",
          element: <DashboardSpoc />,
        },
        {
          path: "/existing-forms",
          element: <ExistingFormsPage />,
        },
        {
          path: "/existing-forms/:id",
          element: <ExistingFormsPage />,
          children: [
            {
              path: ":subItemId",
            },
          ],
        },
        {
          path: "/requests",
          element: <RequestsPage />,
        },
        {
          path: "/requests/view",
          element: <ViewRequest />,
        },
        {
          path: "/reports",
          element: <ReportsPage />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    } as { v7_startTransition: boolean; v7_relativeSplatPath: boolean },
  }
);

export default router;

// export const Router = (): ReactElement => {
//   return (
//     <Routes>
//       <Route path="/" element={<AuthLayout />}>
//         <Route path="/" element={<Navigate to="/login" />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/404" element={<ErrorPage />} />
//         <Route path="*" element={<Navigate to="/404" />} />
//       </Route>
//       <Route path="/" element={<DashboardLayout />}>
//         <Route path="/" element={<Navigate to="/home" replace />} />
//         <Route path="/home" element={<Home />} />
//       </Route>
//     </Routes>
//   );
// };

// export default Router;
