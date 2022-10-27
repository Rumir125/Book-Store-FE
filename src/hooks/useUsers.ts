import { useQuery } from "react-query";
import { fetchUsers } from "../../pages/api/user-api";
import { GET_USERS } from "../keys/keys";

export const useUsers = () => {
  const { isLoading, isError, isSuccess, data } = useQuery([GET_USERS], () =>
    fetchUsers()
  );

  return { userData: data?.data || [], isLoading, isError };
};
