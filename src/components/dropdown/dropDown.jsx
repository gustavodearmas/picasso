import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const DropDown = ({ label, name, defaultValue="", required, options }) => {
  //console.log("defaultValue: ", defaultValue)
  const [selectedValue, setSelectedValue] = useState(defaultValue);
    const optionsSelect = [
      ["", "Seleccione una opción", true],
      ...Object.entries(options),
    ];
  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);
  //console.log("selectedValue: ", selectedValue)
  return (
    <div className="flex-col items-center mb-3 text-sm">
      <label className="block text-gray-600 font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <select
        className="bg-white w-full rounded-md text-gray-500 h-9 focus:outline-none px-4 py-2"
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
