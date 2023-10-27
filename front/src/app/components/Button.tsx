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
      className={`${classes} ${
        xl ? "w-[350px]" : "w-[250px]"
      } h-20 rounded-[60px] text-3xl flex flex-row  items-center justify-center`}
      type={submit ? "submit" : "button"}
    >
      {icon}
      <span>{name}</span>
    </button>
  );
};

export default Button;
