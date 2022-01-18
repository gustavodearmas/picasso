import React from "react";

const ButtonImport = ({text, icon, cssadd, bg="bg-parotia-3", onchange=()=>{}}) => {
  return (
   
      <div className={`flex flex-row px-4 py-2 items-center ${bg} rounded text-xs text-white ml-2 ${cssadd}`}>
        <i className={icon}></i>
        <span>{text}</span>
        <input type="file" onChange={onchange} />

      </div>

  );
};

export default ButtonImport;