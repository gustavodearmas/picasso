import React from "react";
import ButtonSidebarSamll from "./sidebar-small/buttonSidebarSmall";

const SidebarSmall = () => {
  return (
    <div className="h-screen hidden lg:block shadow-lg relative w-20">
      <div className="bg-parotia-1 h-full justify-center">
        <div className="flex items-center justify-start pt-20 ml-8 ">
          <p className="font-bold text-white text-xl"></p>
        </div>
        <nav className="mt-6 justify-center">
         <ButtonSidebarSamll title="Dashbd"/>
         <ButtonSidebarSamll title="Usuarios"/>
         <ButtonSidebarSamll title="Inventario"/>
         <ButtonSidebarSamll title="Ingresos"/>
         <ButtonSidebarSamll title="Egresos"/>
         <ButtonSidebarSamll title="Ajustes"/>
         <ButtonSidebarSamll title="Egresos"/>
         <ButtonSidebarSamll title="Egresos"/>
        </nav>
      </div>
    </div>
  );
};

export default SidebarSmall;
