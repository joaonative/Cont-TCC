import React from "react";
import Sidebar from "../components/Sidebar";
import SidebarDesktop from "../components/SidebarDesktop";

const myDiaryPage = () => {
  return (
    <>
      <Sidebar active="Todos os Diários" primary="#A273C6" secondary="#CBB3D8" tertiary="#D8CADB"/>
      <SidebarDesktop />
    </>
  );
};

export default myDiaryPage;
