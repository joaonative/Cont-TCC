import { API_URL } from "@/constants/api.url";
import axios from "axios";

const TOKEN_KEY = "token";

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

export function onTokenChange(
  callback: (token: string | null) => void
): () => void {
  const handleStorageChange = (e: StorageEvent) => {
    if (e.key === TOKEN_KEY) {
      callback(getToken());
    }
  };

  window.addEventListener("storage", handleStorageChange);

  return () => {
    window.removeEventListener("storage", handleStorageChange);
  };
}

export async function login(
  email: string,
  password: string
): Promise<string | null> {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });

    if (response.data && response.data.token) {
      setToken(response.data.token);
      return response.data.token;
    }
    return null;
  } catch (error) {
    throw error;
  }
}

export async function register(
  email_user: string,
  nome_user: string,
  senha_user: string
): Promise<any> {
  try {
    const response = await axios.post(`${API_URL}/auth/sign-up`, {
      email_user,
      nome_user,
      senha_user,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
