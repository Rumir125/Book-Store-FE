import { Button } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { fetchBooks } from "../../api/book-api";
import { GET_BOOKS } from "../../../src/keys/keys";

import CreateOrEditBook from "../../../src/components/CreateOrEditBook";
import { useQuery } from "react-query";

const AddBook: NextPage = () => {
  const router = useRouter();

  const { id }: any = router.query;

  const { data, isLoading } = useQuery([GET_BOOKS], () => fetchBooks());

  const books = data?.data || [];
  const book = books.find((item: any) => item.id === id) || {};

  return <div>{!isLoading && <CreateOrEditBook isEdit book={book} />}</div>;
};

export default AddBook;
