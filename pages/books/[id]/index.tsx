import { NextPage } from "next";
import { useRouter } from "next/router";

import { fetchBooks, getBook } from "../../api/book-api";
import { GET_BOOKS } from "../../../src/keys/keys";

import CreateOrEditBook from "../../../src/components/CreateOrEditBook";
import { useQuery } from "react-query";

const AddBook: NextPage = () => {
  const router = useRouter();

  const { id }: any = router.query;

  const { data, isLoading } = useQuery([GET_BOOKS, id], () => getBook(id), {
    enabled: !!id,
  });

  const book = data?.data || {};

  return <div>{!isLoading && <CreateOrEditBook isEdit book={book} />}</div>;
};

export default AddBook;
