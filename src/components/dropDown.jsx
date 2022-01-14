import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const DropDown = ({ label, name, defaultValue = "", required, options }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
    const optionsSelect = [
      ["", "Seleccione una opción", true],
      ...Object.entries(options),
    ];
  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);
  return (
    <div className="flex items-center my-1">
      <label className="block mb-1 text-gray-600 font-bold text-xs mr-2 w-7/12" htmlFor={name}>
        {label}
      </label>
      <select
        className="bg-white rounded-md text-gray-600 px-2 py-1 focus:outline-none w-full text-xs w-5/12"
        required={required}
        name={name}
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        {optionsSelect.map((o) => {
            return (
              <option key={nanoid()} value={o[0]} disabled={o[2] ?? false} >
                {o[1]}
              </option>
            );
          })}
       
      </select>
    </div>
  );
};

export default DropDown;
