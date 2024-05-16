import { Outlet } from "react-router-dom";
import Features from "./Features";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

function AppLayout() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideNav />
        <Outlet />
      </div>
      <Features />
      <Footer />
    </>
  );
}

export default AppLayout;
