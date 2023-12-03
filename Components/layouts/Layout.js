import React, { useContext, useEffect } from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import AppDrawer from "../../utilsComponents/AppDrawer";
import { AppContext } from "../../contextApi/AppContextApi";
import Footer from "./Footer";

export default function Layout({ children }) {
  const { setToggleDrawer } = useContext(AppContext);

  useEffect(() => {
    setToggleDrawer(false);
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#fff" }}>
        <TopHeader />
        <Navbar />
        <AppDrawer />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </>
  );
}
