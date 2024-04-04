import { Outlet } from "react-router-dom";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DashboardLayout;
