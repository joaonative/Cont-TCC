import Sidebar from "@/app/components/Sidebar";
import SidebarDesktop from "@/app/components/SidebarDesktop";
import React from "react";

const favoritesPage = () => {
  return (
    <>
      <Sidebar active="Favoritos" primary="#A273C6" secondary="#CBB3D8" tertiary="#D8CADB"/>
      <SidebarDesktop />
    </>
  );
};

export default favoritesPage;
