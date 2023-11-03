import Link from "next/link";
import React from "react";

const SidebarItem = ({
  href,
  name,
  selected,
  onItemClick,
}: {
  href: string;
  name: string;
  selected?: boolean;
  onItemClick: (name: string) => void;
}) => {
  const handleClick = () => {
    onItemClick(name);
  };

  return (
    <Link
      href={`/${href}`}
      className={`w-full py-2 px-4 flex items-center justify-center text-xl capitalize font-semibold ${
        selected ? "bg-roxao text-white" : "bg-none text-roxao"
      }`}
      onClick={handleClick}
    >
      {name}
    </Link>
  );
};

export default SidebarItem;
