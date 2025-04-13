import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import useThemeStore from "@/store/themeStore";
import { useEffect } from "react";

const App = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
