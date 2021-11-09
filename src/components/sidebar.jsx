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
              className="bg-blue-600 p-1.5 rounded flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <svg
                className="w-5 h-5 text-white stroke-current"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
            <button className="flex items-center justify-center p-0.5 rounded bg-parotia-2 focus:outline-none focus:ring-1 focus:ring-gray-500">
              <svg
                className="w-3 h-3 text-gray-300 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.25 6.75L4.75 12L10.25 17.25"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className="w-full rounded pl-8 pr-4 py-2.5 text-xs font-light bg-parotia-2 text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-parotia-2"
              placeholder="search"
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
            <Items icon="" title="Dasboard" link="#" />
            <ItemsChilds icon="" title="componente" link="#" />
            <Items icon="" title="Dasboard" link="#" />
            <Items icon="" title="Dasboard" link="#" />
            <Items icon="" title="Dasboard" link="#" />
            <Items icon="" title="Dasboard" link="#" />
          </ul>
        </div>

        {/* Linea separadora */}
        <div className="px-6 pt-8">
          <hr className="border-gray-700" />
        </div>

        {/* items2 sidebar */}
        <div className="px-6 pt-4 pb-8">
          <ul>
            <Items icon="" title="Dasboard" link="#" />
            <Items icon="" title="Dasboard" link="#" />
            <Items icon="" title="Dasboard" link="#" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
