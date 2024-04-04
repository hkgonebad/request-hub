import { createBrowserRouter } from "react-router-dom";

// Layouts
import AuthLayout from "../layouts/Auth";
import DashboardLayout from "../layouts/Dashboard";

// Pages
import Login from "../pages/Auth/Login";
import Home from "../pages/Home";

import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
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
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

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
