import { NextPage } from "next";
import { useRouter } from "next/router";

import { getBook } from "../../api/book-api";
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

  if (!isLoading && !Object.values(book).length) {
    router.push("/404");
  }
  return <div>{!isLoading && <CreateOrEditBook isEdit book={book} />}</div>;
};

// export const getStaticProps: GetStaticProps = async () => {
//   if (!articleData) {
//     return {
//       redirect: {
//         destination: "/404",
//         permanent: false,
//       },
//     };
//   }
// };

export default AddBook;
