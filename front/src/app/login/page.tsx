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

const LoginPage = () => {
  const API_URL = "http://localhost:38000";

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });

      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        router.push("/");
      }
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
    <div className="w-screen h-screen bg-azul">
      <div className="flex flex-row items-center justify-between">
        <Image
          src={Logo}
          width={820}
          height={0}
          alt="Login"
          className="ml-20"
        />
        <div className="flex flex-col items-center justify-start gap-10 mr-80">
          <div className="flex flex-row items-center gap-10"></div>
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center justify-start bg-branquinho px-[25px] py-3 rounded-[60px] gap-10 h-[685px] w-[530px]"
          >
            <Image src={Logo2} width={100} height={0} alt="Logo" />
            <h1 className="text-4xl text-azul-escuro font-semibold">
              {errorMessage ? errorMessage : "Cont;nue"}
            </h1>
            <div className="flex flex-col gap-8">
              <Input
                type="email"
                label="email:"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                label="senha:"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
            <Button
              name="Entrar"
              classes="bg-azul-escuro text-white hover:bg-white hover:text-azul-escuro hover:border-azul-escuro hover:border-2 transition"
              submit
            />
            <p className="text-azul-escuro text-2xl">OU</p>
            <Button
              name="Entrar com google"
              classes="bg-white text-azul-escuro"
              icon={
                <Image src={Google} width={60} height={0} alt="google logo" />
              }
              xl
            />
          </form>
          <Link href={"/cadastro"}>
            <Button
              name="Cadastro"
              classes="bg-white text-azul-escuro border-2 border-azul-escuro hover:bg-azul-escuro hover:text-white transitio"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
