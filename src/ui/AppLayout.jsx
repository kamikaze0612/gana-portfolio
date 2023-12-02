import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
