import React from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import AppDrawer from "../../utilsComponents/AppDrawer";
import HomeHeroSection from "./HomeHeroSection";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <TopHeader />
        <Navbar />
        <AppDrawer />
        <HomeHeroSection />
      </div>
      <div>{children}</div>
      <div>
        <p>Footer</p>
      </div>
    </>
  );
}
