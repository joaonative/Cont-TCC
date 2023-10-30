"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../../public/assets/logo.svg";
import Image from "next/image";
import Menu from "../../../public/assets/menu.svg";
import MenuExit from "../../../public/assets/menu-exit.svg";
import Exit from "../../../public/assets/exit.svg";
import File from "../../../public/assets/file.svg";
import Info from "../../../public/assets/info.svg";
import Edit from "../../../public/assets/edit.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import getUserInformation from "@/services/user.service";
import { User } from "@/interfaces/user.interface";
import {
  onTokenChange,
  getToken,
  removeToken,
} from "@/services/userAuth.service";

const HomeHeader = () => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<any | null>(null);

  const [token, setToken] = useState<string | null>(
    typeof window !== "undefined" ? localStorage.getItem("token") : null
  );

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await getUserInformation();
        setUser(userData);
        console.log("user:", user);
      } catch (err) {
        setError(err);
      }
    }
    fetchUser();
  }, []);

  useEffect(() => {
    const unsubscribe = onTokenChange((newToken) => {
      setToken(newToken);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const currentToken = getToken();
    if (!currentToken) {
      router.push("/login");
    } else {
      router.push("/");
    }
  }, [token, router]);

  const handleLogOut = () => {
    removeToken();
    setToken(null);
  };

  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <header className="flex flex-row items-center justify-between md:px-5 md:py-2 p-2 bg-azul">
      <div className="flex flex-row items-center justify-center md:gap-5 gap-2">
        <Image
          src={Logo}
          width={1}
          height={0}
          alt="Cont Logo"
          className="object-contain md:w-20 w-12"
        />
        <h1 className="md:text-4xl text-2xl font-bold text-white">
          Bem vindo {user?.res.name}!
        </h1>
      </div>
      <div className="relative p-1 shadow-2xl rounded-[12px] bg-[#6773B5]">
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
          <div className="absolute right-0 mt-4 w-60 md:w-80 py-1 rounded-md shadow-lg bg-azul">
            <Link
              href={"/"}
              className="px-4 py-2 md:py-3 flex flex-row items-center justify-start gap-2 text-white hover:bg-azul-escuro transition text-xl md:text-2xl"
            >
              <Image
                src={Edit}
                width={0}
                height={0}
                alt="Navigation icon"
                className="w-7 md:w-10"
              />
              <p>Alternar conta</p>
            </Link>
            <Link
              href={"/"}
              className="hover:bg-azul-escuro transition px-4 py-2 md:py-3 flex flex-row items-center justify-start gap-2 text-white text-xl md:text-2xl"
            >
              <Image
                src={File}
                width={0}
                height={0}
                alt="Navigation icon"
                className="w-7 md:w-10"
              />
              <p>Ver Termos</p>
            </Link>
            <Link
              href={"/"}
              className="hover:bg-azul-escuro transition px-4 py-2 md:py-3 flex flex-row items-center justify-start gap-2 text-white text-xl md:text-2xl"
            >
              <Image
                src={Info}
                width={0}
                height={0}
                alt="Navigation icon"
                className="w-7 md:w-10"
              />
              <p>Sobre</p>
            </Link>
            <button
              className="hover:bg-azul-escuro transition px-4 py-2 md:py-3 flex flex-row items-center justify-start gap-2 text-white text-xl md:text-2xl w-full"
              onClick={handleLogOut}
            >
              <Image
                src={Exit}
                width={0}
                height={0}
                alt="Cont Logo"
                className="w-7 md:w-10"
              />
              <p>Sair</p>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default HomeHeader;
