import { useQuery } from "react-query";
import { fetchBooks, getUserBooks } from "../../pages/api/book-api";
import { GET_BOOKS } from "../../pages/constants/keys";

export const useBooks = () => {
  const { isLoading, isError, isSuccess, data } = useQuery([GET_BOOKS], () =>
    fetchBooks()
  );

  return { booksData: data?.data || [], isLoading, isError };
};

export const useUserBooks = (userId: any) => {
  const { isLoading, isError, isSuccess, data } = useQuery(
    [GET_BOOKS, userId],
    () => getUserBooks(userId),
    {
      enabled: !!userId,
    }
  );

  return { booksData: data?.data || [], isLoading, isError };
};
