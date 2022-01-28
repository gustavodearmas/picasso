import React from 'react'

const TextAreaCol = ({name, label, type, defaultValue, disabled, required}) => {
    return (
        <div className="flex flex-col items-left my-1">
        <label className="block text-gray-600 font-semibold text-xs font-bold mr-2 w-7/12">
          {label}
        </label>
        <textarea
          type={type}
          name={name}
          required={required}
          defaultValue={defaultValue}
          disabled={disabled}
          className="bg-white px-2 py-1 outline-none rounded-md w-full text-xs w-5/12 h-40"
        />
      </div>
    )
}

export default TextAreaCol