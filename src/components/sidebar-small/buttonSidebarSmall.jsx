import React from "react";

const ButtonSidebarSamll = ({ title, icon }) => {
  return (
    <>
      <a
        className="h-10 text-white-800 flex my-5 hover:bg-picasso-1 rounded m-1" //add : border-white  border-l-2
        href="#"
      >
        <div className="m-auto text-white ">
          <div>
            <i className={icon}></i>
          </div>
          <div>
            <p className="text-xxs">{title}</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default ButtonSidebarSamll;
