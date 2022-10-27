import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
      margin: "20px 0px",
    },
    cardsWrapper: {
      display: "flex",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      [theme.breakpoints.down("md")]: {
        justifyContent: "space-around",
      },
    },
  })
);

export default useStyles;
