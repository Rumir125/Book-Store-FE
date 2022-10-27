import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setAuthorized } from "../../features/user/userSlice";
import useStyles from "./styles";

const ToolbarLayout: React.FC<any> = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();

  const goToUserCreatePage = async () => {
    router.push("/users/create");
  };
  const goToHomePage = () => {
    router.push("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    dispatch(setAuthorized(false));
    router.push("/users/signin");
  };

  const isAuthorized = useSelector((state: any) => state.user.authorized);
  const username = useSelector((state: any) => state.user.username);
  const userId = useSelector((state: any) => state.user.userId);

  return (
    <Container
      style={{
        paddingBottom: "40px",
        height: "100%",
        position: "relative",
        zIndex: 1,
        padding: "20px 1rem",
      }}
    >
      <div className={classes.container}>
        <div>
          <Button style={{ color: "white" }} onClick={goToHomePage}>
            Home
          </Button>
        </div>
        <div>
          {!isAuthorized && (
            <Button style={{ color: "white" }} onClick={goToUserCreatePage}>
              Sign Up
            </Button>
          )}
          {!isAuthorized && (
            <Button style={{ color: "white" }}>
              <Link href="/users/signin">Sign In</Link>
            </Button>
          )}
          {isAuthorized && (
            <div style={{ display: "flex", columnGap: "10px" }}>
              <Button
                // variant="outlined"
                style={{ color: "white" }}
                onClick={() => router.push(`/books/user/${userId}`)}
              >
                My Books
              </Button>
              <Button
                // variant="outlined"
                style={{ color: "white" }}
                onClick={() => router.push("/books")}
              >
                View all Books
              </Button>
              <Typography style={{ margin: "auto", cursor: "default" }}>
                {username}
              </Typography>
              <Button
                style={{ color: "white" }}
                // variant="outlined"
                onClick={handleLogout}
              >
                Log Out
              </Button>
            </div>
          )}
        </div>
      </div>
      <Box style={{ padding: "1rem 0px" }}>{children}</Box>
    </Container>
  );
};

export default ToolbarLayout;
