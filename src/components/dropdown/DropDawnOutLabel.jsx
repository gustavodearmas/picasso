import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const DropDownOutLabel = ({ name, defaultValue="", required, options, verify }) => {
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
    <div className="items-center my-1 text-sm">
      <select
        className="bg-white rounded-md text-gray-600 px-2 py-1 focus:outline-none w-full"
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

export default DropDownOutLabel;
