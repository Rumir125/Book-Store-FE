// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { BACKEND_BASE_URL } from "../constants/endpoints";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}

export const fetchBooks = () => {
  return axios.get(`${BACKEND_BASE_URL}/books`);
};

export const createUser = async (payload: any) => {
  return axios.post(`${BACKEND_BASE_URL}/user`, payload);
};

export const fetchUsers = async () => {
  return axios.get(`${BACKEND_BASE_URL}/user`);
};

export const createBook = async (payload: any) => {
  return axios.post(`${BACKEND_BASE_URL}/books`, payload);
};
