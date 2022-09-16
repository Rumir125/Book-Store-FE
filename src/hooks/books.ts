import { useQuery } from "react-query";
import { fetchBooks } from "../../pages/api/hello";
import { GET_BOOKS } from "../../pages/constants/keys";

export const useBooks = () => {
  const { isLoading, isError, isSuccess, data } = useQuery([GET_BOOKS], () =>
    fetchBooks()
  );

  return { booksData: data?.data || [], isLoading, isError };
};
