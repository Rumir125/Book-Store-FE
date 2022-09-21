// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import { BACKEND_BASE_URL } from "../../src/keys/endpoints";

const getHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
    },
  };
};

export const createUser = async (payload: any) => {
  return axios.post(`${BACKEND_BASE_URL}/user`, payload);
};

export const fetchUsers = async () => {
  return axios.get(`${BACKEND_BASE_URL}/user`);
};

export const signIn = async (payload: any) => {
  return axios.post(`${BACKEND_BASE_URL}/auth/login`, payload);
};

export const deleteUser = async (userId: number) => {
  return axios.delete(`${BACKEND_BASE_URL}/user/${userId}`, getHeaders());
};
