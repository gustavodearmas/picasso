import React from "react";
import Sidebar from "../components/sidebar";
import Content from "../components/content";
import SidebarSmall from "../components/sidebar-small";
import { useState } from "react";
// import { useState } from "react";

const Index = () => {
  const [sidebarResponsive, setSidebarResponsive] = useState(false);
  return (
    <div className="flex flex-row h-screen ">
    {sidebarResponsive ? <SmallSidebar /> : <Sidebar_ />}
    <div className="bg-indigo-50 flex-auto flex flex-col relative ">
      <div className="bg-parotia-3 h-16 sticky">
        <div className="flex flex-row mt-4 items-center justify-center">
          <div className="w-20 ml-4">
            <button onClick={()=>setSidebarResponsive(!sidebarResponsive)}>
            <i class="fas fa-bars"></i>
            </button>
          </div>
          <div className="flex flex-auto justify-end">
          <div className="flex items-center justify-center mx-2">Hi, user</div>
            <div className="flex bg-white rounded-full h-10 w-10 items-center justify-center">img</div>
            
          </div>
        </div>
      </div>
      <div className="m-1 flex-auto h-20 overflow-y-auto p-2">
        
        <Content/>
      
      </div>
      
    </div>
  </div>
  );
};

const Sidebar_ = () => {
  return (
    <div className="w-54 flex-shrink-0 hidden md:flex">
      <Sidebar />
    </div>
  );
};

const SmallSidebar = () => {
  return (
    <div className="w-20 flex-shrink-0">
      <SidebarSmall />
    </div>
  );
};

export default Index;
