import React from "react";

const CustomInput = ({
  name,
  value,
  setvalue,
  onChange,
  label,
  type = "text",
  placeholder = "Enter Value Here",
  error,
  wfull,
}) => {
  return (
    <div className={wfull ? "w-full" : ""}>
      <div>
        <label
          htmlFor={name}
          className="block mb-2 font-semibold text-gray-950 dark:text-white capitalize"
        >
          {label}
        </label>
        <input
          type={type}
          id={name}
          value={value}
          onChange={onChange}
          className=" border text-gray-900 outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
        />
      </div>
      {error && <div className="text-red-700 text-sm mt-1">{error}</div>}
    </div>
  );
};

export default CustomInput;
