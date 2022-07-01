import React from "react";

const ButtonBgLarge= ({text, icon, cssadd, bg="bg-parotia-3", onclick=()=>{}, type}) => {
  return (
    <button className={`${bg} rounded text-xxs text-white mx-0.5 ${cssadd}`}  onClick={onclick} type={type}>
      <div className="flex flex-row px-2 items-center justify-center">
        <i className={icon}></i>
        <span className="mx-0.5">{text}</span>
      </div>
    </button>
  );
};

export default ButtonBgLarge;
