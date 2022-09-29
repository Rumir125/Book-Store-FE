import { Theme } from "@mui/material/styles";
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
  })
);

export default useStyles;
