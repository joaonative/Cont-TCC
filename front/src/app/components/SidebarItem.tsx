import Link from "next/link";
import React from "react";

const SidebarItem = ({
  href,
  name,
  selected,
  onItemClick,
  primary,
  secondary,
  tertiary,
}: {
  href: string;
  name: string;
  selected?: boolean;
  primary: string;
  secondary: string;
  tertiary: string;
  onItemClick: (name: string) => void;
}) => {
  const handleClick = () => {
    onItemClick(name);
  };

  return (
<Link
  href={`/${href}`}
  className={`w-full py-2 px-4 flex items-center justify-center text-xl capitalize font-semibold  ${
    selected ? primary :  secondary
  }`}
  onClick={handleClick}
>
      {name}
    </Link>
  );
};

export default SidebarItem;
