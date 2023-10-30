"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "../../../node_modules/next/image";
import Button from "../components/Button";
import Input from "../components/Input";
import Logo from "../../../public/assets/logo.png";
import Logo2 from "../../../public/assets/logo2.png";
import Google from "../../../public/assets/google.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { error } from "console";
import { login } from "@/services/userAuth.service";

const LoginPage = () => {
  const API_URL = "http://localhost:38000";

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      await login(email, password);
      router.push("/");
    } catch (error: any) {
      if (error.response) {
        setErrorMessage("Email ou senha inválidos");
        setEmail("");
        setPassword("");
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
        <form onSubmit={handleLogin}>
          <div className="mt-5">
            <Input
              type="email"
              label="email:"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <Input
              type="password"
              label="senha:"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-10 flex flex-col gap-5 items-center justify-center">
            <Button
              name="Entrar"
              submit
              classes="hover:bg-white hover:text-azul-escuro hover:border-azul-escuro hover:border bg-azul-escuro border-azul-escuro text-white"
            />
            <p className="text-azul-escuro text-xl font-semibold">OU</p>
            <Button
              name="Entrar com google"
              classes="bg-white text-azul-escuro border-white hover:bg-azul-escuro hover:text-white px-3"
              icon={
                <Image src={Google} height={50} width={0} alt="google logo" />
              }
            />
            <p className="text-xl">
              Não possui uma conta?{" "}
              <Link href={"/cadastro"}>
                <u className="text-azul-escuro">Cadastre-se!</u>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
