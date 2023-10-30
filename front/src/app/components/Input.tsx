import React from "react";

const Input = ({
  type,
  label,
  value,
  onChange,
}: {
  type: string;
  label: string;
  value: any;
  onChange: any;
}) => {
  return (
    <input
      type={type}
      placeholder={label}
      value={value}
      className="block w-full p-2 border-b-2 outline-none placeholder:capitalize bg-transparent border-b-azul-escuro"
      onChange={onChange}
      required
      autoComplete="new-password"
    />
  );
};

export default Input;
