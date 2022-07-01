import React from "react";

const TextAreaCol = ({
  name,
  label,
  type,
  defaultValue,
  disabled,
  required,
}) => {
  return (
    <div className="flex flex-col items-left py-1 h-19/24 lg:h-20/24 text-sm">
      <label className="block text-gray-600 font-bold mr-2 mb-2">
        {label}
      </label>
      <textarea
        type={type}
        name={name}
        required={required}
        defaultValue={defaultValue}
        disabled={disabled}
        className="h-19/24 lg:h-20/24 bg-white px-2 py-1 outline-none rounded-md"
      />
    </div>
  );
};

export default TextAreaCol;
