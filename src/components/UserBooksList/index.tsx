import React from "react";

import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useUsers } from "../../hooks/useUsers";
import useStyles from "./styles";
import ActionButton from "../Shared/Button";
import BookCards from "../BookCards";

const UserBooksList: React.FC<any> = () => {
  const router = useRouter();
  const classes = useStyles();

  const { userId }: any = router.query;
  const { userData } = useUsers();

  const user = userData.find((item: any) => item.id === userId);

  return (
    <div>
      <div className={classes.container}>
        <Typography variant="h4">Books ({user?.username}) </Typography>
      </div>
      <ActionButton onClick={() => router.push("/books/add")}>
        Add a new book
      </ActionButton>
      <BookCards userId={userId} />
    </div>
  );
};

export default UserBooksList;
