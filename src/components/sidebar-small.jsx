import React from "react";

const SidebarSmall = () => {
  return (
    <div className="h-screen text-center ">
      <div className="bg-parotia-1 h-full overflow-y-auto ">
        <div className="flex items-center justify-start pt-20 ml-8 ">
          <p className="font-bold text-white text-xl"></p>
        </div>
        <nav className="mt-6">
          <ButtonSidebarSamll title="Dashboard" icon="fas fa-chart-pie" />
          <ButtonSidebarSamll title="Usuarios" icon="fas fa-users-cog" />
          <ButtonSidebarSamll title="Inventario" icon="fas fa-dolly-flatbed" />
          <ButtonSidebarSamll title="Ingresos" icon="fas fa-coins" />
          <ButtonSidebarSamll title="Egresos" icon="fas fa-hand-holding-usd" />
          <ButtonSidebarSamll title="Ajustes" icon="fas fa-cog" />
          <ButtonSidebarSamll title="Facturas" icon="fas fa-file-invoice-dollar" />
          <ButtonSidebarSamll title="Cotizaciones" icon="fas fa-receipt" />
          <ButtonSidebarSamll title="Diseño" icon="fas fa-sliders-h" />
        </nav>
      </div>
    </div>
  );
};





const ButtonSidebarSamll = ({ title, icon }) => {
  return (
    <>
      <a
        className="flex mb-1 border-l-4 border-parotia-1 hover:border-gray-500" //add : border-white  border-l-2
        href="#"
      >
        <div className="flex flex-col m-auto hover:text-menta-60 text-gray-100 text-2xl">
          <i className={icon+" pt-2"}></i>
          <spam className="text-xxs">{title}</spam>
        </div>
      </a>
    </>
  );
};

export default SidebarSmall;
