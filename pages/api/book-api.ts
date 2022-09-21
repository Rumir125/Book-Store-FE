// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { BACKEND_BASE_URL } from "../../src/keys/endpoints";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Jones" });
}

const getHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
    },
  };
};

export const fetchBooks = () => {
  return axios.get(`${BACKEND_BASE_URL}/books`, getHeaders());
};

export const createBook = async (payload: any) => {
  return axios.post(`${BACKEND_BASE_URL}/books`, payload, getHeaders());
};

export const editBook = async (bookId: number, payload: any) => {
  return axios.put(
    `${BACKEND_BASE_URL}/books/${bookId}`,
    payload,
    getHeaders()
  );
};

export const deleteBook = async (bookId: number) => {
  return axios.delete(`${BACKEND_BASE_URL}/books/${bookId}`, getHeaders());
};

export const getBook = (bookId: number) => {
  return axios.get(`${BACKEND_BASE_URL}/books/${bookId}`, getHeaders());
};

export const getUserBooks = (bookId: any) => {
  return axios.get(`${BACKEND_BASE_URL}/books/user/${bookId}`, getHeaders());
};
