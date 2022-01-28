import React from "react";
import ButtonBorder from "../../components/buttoms/buttonBorder";

const SelectAllDelete = () => {
  return (
    <div className="h-2/24 divide-y divide-gray-200 ">
      <div className="flex flex-row justify-between items-center px-4 pb-2">
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="text-xxs italic">Seleccionar todo</span>
        </div>
        <div className="">
          <ButtonBorder
            text="Borrar"
            icon="far fa-trash-alt pr-2"
            cssAdd="mr-1 hover:border-red-400 hover:text-red-400"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SelectAllDelete;
