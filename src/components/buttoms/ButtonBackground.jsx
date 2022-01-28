import React from "react";

const ButtonBackground = ({text, icon, cssadd, bg="bg-parotia-3", onclick=()=>{}}) => {
  return (
    <button className={`${bg} rounded text-xxs text-white ml-2 ${cssadd}`}  onClick={onclick}>
      <div className="flex flex-row px-2 py-1 items-center justify-center ">
        <i className={icon}></i>
        <span >{text}</span>
      </div>
    </button>
  );
};

export default ButtonBackground;
