"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [token, setToken] = useState<string | null>(
    typeof window !== "undefined" ? localStorage.getItem("token") : null
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (!token) {
      router.push("/login");
    } else {
      router.push("/");
    }
  }, [token, router]);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <>
      <button onClick={handleLogOut}>sair</button>
    </>
  );
}
