import React from "react";

const Input = ({name, label, type, defaultValue, disabled, required}) => {
  return (
    <div className="flex flex-col mb-3 text-sm">
      <label className="block text-gray-600 font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        defaultValue={defaultValue}
        disabled={disabled}
        className="bg-white px-4 py-2 outline-none rounded-md w-full"
      />
    </div>
  );
};

export default Input;
