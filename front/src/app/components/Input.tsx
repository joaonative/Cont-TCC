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
      className="w-[400px] border-b-4 border-azul-escuro placeholder:text-grey placeholder:capitalize placeholder:text-2xl bg-transparent outline-none text-2xl"
      onChange={onChange}
      required
      autoComplete="new-password"
    />
  );
};

export default Input;
