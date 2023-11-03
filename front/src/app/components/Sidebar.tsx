"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";
import Menu from "../../../public/assets/menu.svg";
import MenuExit from "../../../public/assets/menu-exit.svg";
import Image from "next/image";

type SidebarItem = {
  name: string;
  href: string;
};

const Sidebar = ({
  active,
  primary,
  secondary,
  tertiary,
}: {
  active: string;
  primary: string;
  secondary: string;
  tertiary: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  const sidebarItems: SidebarItem[] = [
    { name: "Todos os Diários", href: "myDiary" },
    { name: "Favoritos", href: "myDiary/favorites" },
    { name: "Editor", href: "myDiary/editor" },
  ];

  useEffect(() => {
    if (!activeItem) {
      setActiveItem(active);
    }
  }, []);

  return (
    <header className="flex flex-row items-center justify-between md:px-5 md:py-2 p-2 bg-roxo md:hidden">
      <Link href={"/"}>
        <h1 className="md:text-4xl text-2xl font-bold text-white">Cont;nue</h1>
      </Link>
      <div className="relative p-1 shadow-2xl rounded-[12px] bg-roxao">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
          <Image
            src={!isOpen ? Menu : MenuExit}
            width={0}
            height={0}
            alt="Menu icon"
            className="w-5 md:w-14"
          />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-4 w-52 md:w-80 py-1 rounded-md shadow-lg bg-roxo">
            {sidebarItems.map((item, index) => (
              <SidebarItem
                key={index}
                href={item.href}
                name={item.name}
                selected={item.name === activeItem}
                onItemClick={handleItemClick}
              />
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Sidebar;
