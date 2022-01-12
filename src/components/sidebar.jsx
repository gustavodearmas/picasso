import React from "react";
import Items from "./sidebar/Items";
import ItemsChilds from "./sidebar/ItemsChilds";

const Sidebar = () => {
  // const [collapseShow, setCollapseShow] = useState("hidden");
  return (
    <nav className="overflow-y-auto bg-parotia-1 flex flex-wrap items-center justify-between relative md:w-64 z-10">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        <div className="px-6 pt-8">
          <div className="flex items-center justify-between">
            <a
              href="#"
            >
            
            </a>
            <button className="flex items-center justify-center p-0.5 rounded bg-parotia-2 focus:outline-none focus:ring-1 focus:ring-gray-500">
              <svg
                className="w-3 h-3 text-gray-300 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.25 6.75L4.75 12L10.25 17.25"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19.25 12H5"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* barra de busqueda */}
        <div className="px-6 pt-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className="w-full rounded pl-8 pr-4 py-2.5 text-xs font-light bg-parotia-2 text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-parotia-2"
              placeholder="buscar"
            />
          </div>
        </div>

        {/* Linea separadora */}
        <div className="px-6 pt-4">
          <hr className="border-gray-700" />
        </div>

        {/* items side-bar */}
        <div className="px-6 pt-4">
          <ul className="flex flex-col space-y-2">
            <Items icon="fas fa-chart-pie" title="Dasboard" link="#" />
            <ItemsChilds icon="fas fa-users-cog" title="Usuarios" link="#" />
            <Items icon="fas fa-dolly-flatbed" title="Inventario" link="#" />
            <Items icon="fas fa-coins" title="Ingresos" link="#" />
            <Items icon="fas fa-hand-holding-usd" title="Egresos" link="#" />
            <Items icon="fas fa-file-invoice-dollar" title="Facturas" link="#" />
            <Items icon="fas fa-receipt" title="Cotizaciones" link="#" />
          </ul>
        </div>

        {/* Linea separadora */}
        <div className="px-6 pt-8">
          <hr className="border-gray-700" />
        </div>

        {/* items2 sidebar */}
        <div className="px-6 pt-4 pb-8">
          <ul>
            <Items icon="fas fa-sliders-h" title="Diseño" link="#" />
            <Items icon="fas fa-cog" title="Ajustes" link="#" /> 
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
