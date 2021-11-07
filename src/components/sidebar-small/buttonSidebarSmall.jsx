import React from "react";

const ButtonSidebarSamll = ({title}) => {
  return (
    <>
      <a
        className="h-10 text-white-800 flex my-5" //add : border-white  border-l-2 
        href="#"
      >
        <div className="m-auto text-white" >
          <div className="">
          <i class="fas fa-abacus"></i>
          </div>
          <div className="">
            <p className="text-white text-xxs">{title}</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default ButtonSidebarSamll;
