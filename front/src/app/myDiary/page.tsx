import React from "react";
import Sidebar from "../components/Sidebar";
import SidebarDesktop from "../components/SidebarDesktop";

const myDiaryPage = () => {
  return (
    <>
      <Sidebar active="Todos os Diários" />
      <SidebarDesktop />
    </>
  );
};

export default myDiaryPage;
