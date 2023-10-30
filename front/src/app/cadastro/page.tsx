"use client";
import Image from "next/image";
import axios from "axios";
import React, { ChangeEvent, use, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Logo from "../../../public/assets/logo.png";
import Logo2 from "../../../public/assets/logo2.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { register } from "@/services/userAuth.service";

const Cadastro = () => {
  const API_URL = "http://localhost:38000";

  const router = useRouter();

  const [email_user, setEmail_user] = useState<string>("");
  const [nome_user, setNome_user] = useState<string>("");
  const [senha_user, setSenha_user] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleRegister = async (e: any) => {
    e.preventDefault();

    if (senha_user !== passwordConfirmation) {
      setErrorMessage("As senhas não coincidem!");
      return;
    }

    try {
      const responseData = await register(email_user, nome_user, senha_user);
      console.log(responseData);
      router.push("/login");
    } catch (error: any) {
      if (error.response) {
        setErrorMessage("Usuário já cadastrado");
      } else if (error.request) {
        setErrorMessage("Erro com o servidor");
      } else {
        setErrorMessage("Algo deu errado");
      }
    }
  };

  return (
    <div className="container mx-auto p-2">
      <style>{`
        body {
          background-color: #717ec7;
        }
      `}</style>
      <div className="max-w-md mx-auto bg-branquinho px-10 py-10 rounded-[40px] shadow-xl">
        <div className="flex items-center justify-center">
          <Image
            src={Logo2}
            width={100}
            height={0}
            className=""
            alt="Cont logo"
          />
        </div>
        <div className="text-center mb-8">
          {errorMessage ? (
            <h1 className="font-semibold text-3xl text-azul-escuro">
              {errorMessage}
            </h1>
          ) : (
            <h1 className="font-semibold text-3xl text-azul-escuro">
              Cont;nue
            </h1>
          )}
        </div>
        <form onSubmit={handleRegister}>
          <div className="mt-5">
            <Input
              type="text"
              label="nome:"
              value={nome_user}
              onChange={(e: any) => setNome_user(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <Input
              type="email"
              label="email:"
              value={email_user}
              onChange={(e: any) => setEmail_user(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <Input
              type="password"
              label="senha:"
              value={senha_user}
              onChange={(e: any) => setSenha_user(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <Input
              type="password"
              label="confirmar senha:"
              value={passwordConfirmation}
              onChange={(e: any) => setPasswordConfirmation(e.target.value)}
            />
          </div>
          <div className="mt-10 flex flex-col gap-5 items-center justify-center">
            <Button
              name="Cadastrar"
              submit
              classes="hover:bg-white hover:text-azul-escuro hover:border-azul-escuro hover:border bg-azul-escuro border-azul-escuro text-white"
            />
            <p className="text-xl">
              Já possui uma conta?{" "}
              <Link href={"/login"}>
                <u className="text-azul-escuro">Fazer login!</u>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
