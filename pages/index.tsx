import { Button, List, ListItem } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import styles from "../styles/Home.module.css";
import { fetchUsers } from "./api/hello";
import { GET_USERS } from "./constants/keys";

const Home: NextPage = () => {
  const router = useRouter();

  const [users, setUsers] = useState([]);

  const goToUserCreatePage = async () => {
    router.push("/users/create");
  };

  const { isLoading, isError, isSuccess, data } = useQuery([GET_USERS], () =>
    fetchUsers()
  );

  useEffect(() => {
    setUsers(data?.data || []);
  }, [data]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button variant="contained" onClick={() => router.push("/books")}>
          Go to Books Page
        </Button>

        <Button onClick={goToUserCreatePage}>Create User</Button>
        <List>
          {users.map((user: any, index) => (
            <ListItem key={`${user.firstName}-${index}`}>
              {`${user.firstName} ${user.lastName}`}
            </ListItem>
          ))}
        </List>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
