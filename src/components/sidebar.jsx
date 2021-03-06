import React, {useState} from "react";
import { Link } from "react-router-dom";

const Items = ({ icon, title, link }) => {
  return (
    <li className="relative text-gray-500 hover:text-white focus-within:text-white">
      <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
        <i className={icon}></i>
      </div>
      <Link
        to={link}
        className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-parotia-2 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-parotia-2"
      >
        {title}
      </Link>
    </li>
  );
};

const ItemsChilds = ({ icon, title, link }) => {
  const [viewChildren, setViewChildren] = useState(false);
  return (
    <li className="">
      <div className="relative flex justify-between text-gray-500 hover:text-white focus-within:text-white">
        <div className="flex items-center w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
            <i className={icon}></i>
          </div>
          <Link
            to={link}
            className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-parotia-2 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-parotia-2"
          >
            {title}
          </Link>
        </div>
        <button
          className="absolute right-0 flex items-center p-1"
          tabIndex="-1"
          onClick={() => {
            setViewChildren(!viewChildren);
          }}
        >
          <svg
            className="w-5 h-5 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15.25 10.75L12 14.25L8.75 10.75"
            ></path>
          </svg>
        </button>
      </div>
      {viewChildren ? (
        <div className="pt-2 pl-4">
          <ul className="flex flex-col pl-2 text-gray-500 border-l border-gray-700">
            <Children title="Reportes" link="/admin/users/filter-data" />
          </ul>
        </div>
      ) : (
        <></>
      )}
    </li>
  );
};

const Children = ({ title, link }) => {
  return (
    <li>
      <Link
        to={link}
        className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-parotia-2 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white"
      >
        {title}
      </Link>
    </li>
  );
};

const Sidebar = () => {
  // const [collapseShow, setCollapseShow] = useState("hidden");
  return (
    <nav className="overflow-y-auto bg-parotia-1 flex flex-wrap items-center justify-between relative md:w-64 z-10">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        <div className="px-6 pt-8">
          <div className="flex items-center justify-between">
            <a href="/#"></a>
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
            <ItemsChilds
              icon="fas fa-users-cog"
              title="Usuarios"
              link="/admin/users"
            />
            <Items icon="fas fa-dolly-flatbed" title="Inventario" link="#" />
            <Items icon="fas fa-coins" title="Ingresos" link="#" />
            <Items icon="fas fa-hand-holding-usd" title="Egresos" link="#" />
            <Items
              icon="fas fa-file-invoice-dollar"
              title="Facturas"
              link="#"
            />
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
            <Items icon="fas fa-sliders-h" title="Dise??o" link="#" />
            <Items icon="fas fa-cog" title="Ajustes" link="#" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
