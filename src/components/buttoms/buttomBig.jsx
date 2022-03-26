import React from "react";

const ButtomBig = ({text, icon, cssadd, bg="bg-parotia-3", onclick=()=>{}, type}) => {
  return (
    <button className={`${bg} rounded text-xs text-white ml-1 ${cssadd}`}  onClick={onclick} type={type}> 
      <div className="flex flex-row px-4 py-2 items-center justify-center">
        <i className={icon}></i>
        <span>{text}</span>
      </div>
    </button>
  );
};

export default ButtomBig;