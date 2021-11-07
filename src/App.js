import "./styles/main.css";
import "./styles/styles_.css";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
// import Content from "./components/content";
// import SidebarSmall from "./components/sidebar-small";
import React from "react";
// import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
// import UserDropdown from "components/Dropdowns/UserDropdown.js";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="flex">
        <div className="flex-none w-64">
          <Sidebar />
        </div>
        <div className="flex-grow  bg-red-400">
          
            <Header />
          
          <div className="bg-white h-full pt-20">hola</div>
          <div className="bg-black h-10">footer</div>
        </div>
      </div>
    </>
  );
}

export default App;
