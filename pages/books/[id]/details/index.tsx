import { NextPage } from "next";
import { useRouter } from "next/router";

import { useQuery } from "react-query";
import BookDetails from "../../../../src/components/BookDetails";
import { GET_BOOKS } from "../../../../src/keys/keys";
import { getBook } from "../../../api/book-api";

const BookDetailsPage: NextPage = () => {
  const router = useRouter();

  const { id }: any = router.query;

  const { data, isLoading } = useQuery([GET_BOOKS, id], () => getBook(id), {
    enabled: !!id,
  });

  const book = data?.data || {};

  return <div>{!isLoading && <BookDetails isEdit {...book} />}</div>;
};

export default BookDetailsPage;
