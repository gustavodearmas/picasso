import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const DropDown = ({ label, name, defaultValue = "", required, options }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  //   const optionsSelect = [
  //     ["", "Seleccione una opción", true],
  //     ...Object.entries(options),
  //   ];
  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);
  return (
    <div>
      <label className="block mb-1 text-gray-600 font-semibold" htmlFor={name}>
        {label}
      </label>
      <select
        className="bg-white rounded-md text-gray-600 px-4 py-2 focus:outline-none w-full"
        required={required}
        name={name}
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        {/* {optionsSelect.map((o) => {
            return (
              <option key={nanoid()} value={o[0]} disabled={o[2] ?? false} >
                {o[1]}
              </option>
            );
          })} */}
        <option>Choose a color</option>
        <option>Red</option>
        <option>Blue</option>
      </select>
    </div>
  );
};

export default DropDown;
