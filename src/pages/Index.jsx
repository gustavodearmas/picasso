import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header"
import Content from "../components/content";
import SidebarSmall from "../components/sidebar-small";
// import { useState } from "react";

const Index = () => {
  return (
    <div className="flex flex-col md:flex-row flex-no-wrap h-screen">
      <div className="flex flex-col md:flex-row flex-no-wrap md:h-full bg-gray-300">
        <div className="sidebar hidden md:flex">
          <SidebarSmall />
          <Sidebar />
        </div>
      </div>
      <div className="flex w-full h-full">
        <div className="w-full h-full  overflow-y-scroll">
          <Header/>
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Index;
