import { Theme } from "@mui/material/styles";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputWrapper: {
      width: "61%",
      margin: "auto",

      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    cancelButtonWrapper: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "20px",
      columnGap: "10px",
    },
    textField: {
      width: "100%",
    },
  })
);

export default useStyles;
