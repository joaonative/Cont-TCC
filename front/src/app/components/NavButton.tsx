import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavButton = ({
  color,
  name,
  icon,
  alt,
  href,
}: {
  color?: string;
  name: string;
  icon: any;
  alt: string;
  href: string;
}) => {
  return (
    <Link
      href={`/${href}`}
      className={`flex flex-row gap-2 items-center px-3 md:px-10 py-5 rounded-xl md:rounded-3xl w-full md:w-[600px] 
      ${color} shadow-xl transition md:hover:bg-azul
      `}
    >
      <Image
        src={icon}
        width={0}
        height={0}
        alt={alt}
        className="w-10 md:w-14"
      />
      <span className="text-3xl md:text-4xl text-white">{name}</span>
    </Link>
  );
};

export default NavButton;
