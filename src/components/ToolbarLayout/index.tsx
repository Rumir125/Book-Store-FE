import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthorized } from "../../features/user/userSlice";

const ToolbarLayout: React.FC<any> = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#337ab7",
          padding: "20px 1rem",
        }}
      >
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
              <Typography style={{ margin: "auto" }}>{username}</Typography>
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
