import "./index.css";
import HomeHeader from "./components/HomeHeader";
import NavButton from "./components/NavButton";
import Tips from "../../public/assets/tips.svg";
import Book from "../../public/assets/book.svg";
import Settings from "../../public/assets/settings.svg";
import Person from "../../public/assets/person.svg";
import Imagem from "../../public/assets/mensagem.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <style>{`
        body {
          background-color: white;
        }
      `}</style>
      <HomeHeader />
      <div className="md:mt-24 md:flex md:flex-row md:items-center md:justify-between md:mx-40 mx-2">
        <div className="flex flex-col items-start mt-2 gap-2 md:gap-10">
          <NavButton
            name="Dicas"
            alt="Tips icon"
            color="bg-[#FDBD5E]"
            icon={Tips}
            href=""
          />
          <NavButton
            name="Meu Diário"
            alt="Tips icon"
            color="bg-[#CBB3D8]"
            icon={Book}
            href="myDiary"
          />
          <NavButton
            name="Depoimentos"
            alt="Tips icon"
            color="bg-[#9DDADE]"
            icon={Person}
            href=""
          />
          <NavButton
            name="Configuração SOS"
            alt="Settings icon"
            color="bg-[#EC6161]"
            icon={Settings}
            href=""
          />
        </div>
        <Image
          src={Imagem}
          width={0}
          height={0}
          alt="Inspiration message"
          className="w-full h-full lg:w-[600px] lg:block md:hidden"
        />
      </div>
    </>
  );
}
