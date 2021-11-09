import React from "react";
import ButtonSidebarSamll from "./sidebar-small/buttonSidebarSmall";

const SidebarSmall = () => {
  return (
    <div className="h-screen  w-18 text-center">
    <div className="bg-black h-full">
      <div className="flex items-center justify-start pt-20 ml-8 ">
        <p className="font-bold text-white text-xl"></p>
      </div>
      <nav className="mt-6">
       <ButtonSidebarSamll title="Dashboard" icon=""/>
       <ButtonSidebarSamll title="Usuarios" icon=""/>
       <ButtonSidebarSamll title="Inventario" icon=""/>
       <ButtonSidebarSamll title="Ingresos" icon=""/>
       <ButtonSidebarSamll title="Egresos" icon=""/>
       <ButtonSidebarSamll title="Ajustes" icon=""/>
       <ButtonSidebarSamll title="Facturas" icon=""/>
       <ButtonSidebarSamll title="Cotizaciones" icon=""/>
      </nav>
    </div>
  </div>
  );
};

export default SidebarSmall;
