import React from "react";

const ButtonSidebarSamll = ({title}) => {
  return (
    <>
      <a
        className="w-full h-10 text-white-800 flex items-center justify-center my-5" //add : border-white  border-l-2 
        href="#"
      >
        <div className="m-auto items-center relative text-white" >
          <div className="block items-center ">
          <i class="fas fa-abacus"></i>
          </div>
          <div className="block">
            <p className="text-white text-xxs">{title}</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default ButtonSidebarSamll;
