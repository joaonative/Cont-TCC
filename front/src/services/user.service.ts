import axios from "axios";
import { User } from "@/interfaces/user.interface";

export default async function getUserInformation(): Promise<User> {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("UserID not found in localStorage");
  }
  try {
    const response = await axios.get<User>(
      `http://localhost:38000/users/pegaPorId`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    throw error;
  }
}
