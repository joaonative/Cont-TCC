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

const Cadastro = () => {
  const API_URL = "http://localhost:38000";

  const router = useRouter();

  const [email_user, setEmail_user] = useState<string>("");
  const [nome_user, setNome_user] = useState<string>("");
  const [senha_user, setSenha_user] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [tel_user, setTel_user] = useState<string>("");
  const [tel_emg_user, setTel_emg_user] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleRegister = async (e: any) => {
    e.preventDefault();

    if (senha_user !== passwordConfirmation) {
      setErrorMessage("As senhas não coincidem!");
      return;
    } else {
      try {
        const response = await axios.post(`${API_URL}/auth/sign-up`, {
          email_user,
          nome_user,
          senha_user,
          tel_user,
          tel_emg_user,
        });

        router.push("/login");

        console.log(response.data);
      } catch (error: any) {
        if (error.response) {
          setErrorMessage("Usuário já cadastrado");
        } else if (error.request) {
          setErrorMessage("Erro com o servidor");
        } else {
          setErrorMessage("Algo deu errado");
        }
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
          alt="Cadastro"
          className="ml-20"
        />
        <div className="flex flex-col items-center justify-start gap-10 mr-80">
          <div className="flex flex-row items-center gap-10"></div>
          <form
            onSubmit={handleRegister}
            className="flex flex-col items-center justify-start bg-branquinho px-[25px] py-3 rounded-[60px] gap-3 h-[685px] w-[530px]"
          >
            <Image src={Logo2} width={100} height={0} alt="Logo" />
            <h1 className="text-4xl text-azul-escuro font-semibold">
              {errorMessage ? errorMessage : "Cont;nue"}
            </h1>
            <div className="flex flex-col gap-9">
              <Input
                label="nome:"
                type="text"
                value={nome_user}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNome_user(e.target.value)
                }
              />
              <Input
                label="email:"
                type="email"
                value={email_user}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail_user(e.target.value)
                }
              />
              <Input
                label="senha:"
                type="password"
                value={senha_user}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSenha_user(e.target.value)
                }
              />
              <Input
                label="confirmar senha:"
                type="password"
                value={passwordConfirmation}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPasswordConfirmation(e.target.value)
                }
              />
              <Input
                label="telefone:"
                type="tel"
                value={tel_user}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setTel_user(e.target.value)
                }
              />
              <Input
                label="telefone de emergencia:"
                type="tel"
                value={tel_emg_user}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setTel_emg_user(e.target.value)
                }
              />
            </div>
            <Button
              name="Cadastrar"
              classes="bg-azul-escuro text-white hover:bg-white hover:text-azul-escuro hover:border-azul-escuro hover:border-2 transition"
              submit
            />
          </form>
          <Link href={"/login"}>
            <Button
              name="Login"
              classes="bg-white text-azul-escuro border-2 border-azul-escuro hover:bg-azul-escuro hover:text-white transition"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
