import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";
import { fetchBooks, getHeaders } from "../../pages/api/book-api";
import { BACKEND_BASE_URL } from "../keys/endpoints";
import { GET_BOOKS, GET_USERS } from "../keys/keys";

export const useBooks = () => {
  const { isLoading, isError, isSuccess, data } = useQuery([GET_BOOKS], () =>
    fetchBooks()
  );

  return { booksData: data?.data || [], isLoading, isError };
};

const ITEMS_PER_PAGE = 2;

export const useUserBooks = (userId: any) => {
  const userParam = userId ? `/user/${userId}` : "";
  console.log(userParam);
  const {
    isLoading,
    isError,
    isSuccess,
    data,
    fetchNextPage,
    hasNextPage,
    status,
  } = useInfiniteQuery(
    userId ? [GET_BOOKS, GET_USERS, userId] : [GET_BOOKS],
    async ({ pageParam = 0 }) => {
      const res = await axios.get(`${BACKEND_BASE_URL}/books${userParam}`, {
        ...getHeaders(),
        params: {
          itemsPerPage: ITEMS_PER_PAGE,
          page: pageParam,
        },
      });
      return res.data;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return lastPage.length !== 0 ? nextPage : undefined;
      },
      getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
    }
  );

  return {
    booksData: data?.pages || [],
    isLoading,
    isError,
    fetchNextPage,
    status,
    hasNextPage,
  };
};

export const useSearchedBooks = ({ isEnabled }: any) => {
  const { isLoading, isError, isSuccess, data } = useQuery(
    [GET_BOOKS],
    () => fetchBooks(),
    {
      enabled: isEnabled,
    }
  );

  return { booksData: data?.data || [], isLoading, isError };
};
