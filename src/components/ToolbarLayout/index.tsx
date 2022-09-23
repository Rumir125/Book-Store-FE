import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
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

  return (
    <div>
      <div className={classes.container}>
        <div>
          <Button className={classes.button} onClick={goToHomePage}>
            Home
          </Button>
        </div>
        <div>
          {!isAuthorized && (
            <Button className={classes.button} onClick={goToUserCreatePage}>
              Sign Up
            </Button>
          )}
          {!isAuthorized && (
            <Button className={classes.button}>
              <Link href="/users/signin">Sign In</Link>
            </Button>
          )}
          {isAuthorized && (
            <div style={{ display: "flex" }}>
              <Typography className={classes.username}>{username}</Typography>
              <Button
                className={classes.button}
                variant="outlined"
                onClick={handleLogout}
              >
                Log Out
              </Button>
            </div>
          )}
        </div>
      </div>
      <Box style={{ padding: "0 1rem" }}>{children}</Box>
    </div>
  );
};

export default ToolbarLayout;
