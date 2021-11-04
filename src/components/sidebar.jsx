import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen hidden lg:block shadow-lg relative w-60">
      <div className="bg-parotia-2 h-full">
        <div className="flex items-center justify-start pt-6 ml-8">
          <p className="font-boldtext-xl">Logo</p>
        </div>
        <nav className="mt-6">
          <div>
            <a
              className="w-full bg-parotia-1 text-white flex items-center pl-6 p-2 my-2 h-10 transition-colors duration-200 justify-start"
              href="#"
            >
              <span className="mx-2 text-sm font-normal">Home</span>
            </a>
          </div>
          <div>
            <a
              className="w-full text-white flex items-center pl-6 p-2 my-2 h-10 transition-colors duration-200 justify-start"
              href="#"
            >
              <span className="mx-2 text-sm font-normal">Home</span>
            </a>
          </div>
          <div>
            <a
              className="w-full text-white flex items-center pl-6 p-2 my-2 h-10 transition-colors duration-200 justify-start"
              href="#"
            >
              <span className="mx-2 text-sm font-normal">Home</span>
            </a>
          </div>
          <div>
            <a
              className="w-full text-white flex items-center pl-6 p-2 my-2 h-10 transition-colors duration-200 justify-start"
              href="#"
            >
              <span className="mx-2 text-sm font-normal">Home</span>
            </a>
          </div>
          <div>
            <a
              className="w-full text-white flex items-center pl-6 p-2 my-2 h-10 transition-colors duration-200 justify-start"
              href="#"
            >
              <span className="mx-2 text-sm font-normal">Home</span>
            </a>
          </div>
          <div>
            <a
              className="w-full text-white flex items-center pl-6 p-2 my-2 h-10 transition-colors duration-200 justify-start"
              href="#"
            >
              <span className="mx-2 text-sm font-normal">Home</span>
            </a>
          </div>
          
          
        </nav>
      </div>
      
    </div>
  );
};

export default Sidebar;
