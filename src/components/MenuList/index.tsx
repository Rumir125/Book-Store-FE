import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function MenuList() {
  const classes = useStyles();
  const router = useRouter();

  const username = useSelector((state: any) => state.user.username);
  const userId = useSelector((state: any) => state.user.userId);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.username} onClick={handleClick}>
        {username}
      </Typography>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => router.push(`/books/user/${userId}`)}>
          My Books
        </MenuItem>
        <MenuItem onClick={() => router.push("/books")}>All Books</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
