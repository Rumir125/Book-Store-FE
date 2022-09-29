import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "61%",
      margin: "auto",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    formWrapper: { width: "fit-content", margin: "auto" },
    buttonWrapper: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "10px",
    },
  })
);

export default useStyles;
