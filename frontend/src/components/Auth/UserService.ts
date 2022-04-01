import axios from "axios";
import { User } from "./User";

const API = "http://localhost:4000";

export const getUser = async () => {
  return await axios.get<User[]>(`${API}/api/auth/signup`);
};

export const createUser = async (user: User) => {
  return await axios.post<User[]>(`${API}/api/auth/signup`, user);
};

export const getUserById = async (id: string) => {
  return await axios.get<User[]>(`${API}/api/home/${id}`);
};

export const getLastUser = async () => {
  return await axios.get<User[]>(`${API}/api/auth/signup`);
};

export const editUserProfile = async (user: User, id: string) => {
  return await axios.put<User[]>(`${API}/api/profile/edit/${id}`, user);
};

export const deleteUser = async (id: string) => {
  return await axios.delete<User[]>(`${API}/api/profile/delete/${id}`);
};
