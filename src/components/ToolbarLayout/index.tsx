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
    <div style={{ marginBottom: "40px" }}>
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
            <div style={{ display: "flex" }}>
              <Typography style={{ margin: "auto", cursor: "default" }}>
                {username}
              </Typography>
              <Button
                style={{ color: "white" }}
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
