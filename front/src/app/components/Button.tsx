import Image from "next/image";
import React from "react";

const Button = ({
  name,
  classes,
  submit,
  icon,
  xl,
}: {
  name: string;
  classes?: string;
  submit?: boolean;
  icon?: any;
  xl?: boolean;
}) => {
  return (
    <button
      className={`${classes} py-3  border flex flex-row items-center justify-center px-10 text-2xl rounded-[60px]`}
    >
      {icon}
      <span>{name}</span>
    </button>
  );
};

export default Button;
