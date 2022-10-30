import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      width: "450px",
      fontSize: "60px",
      fontWeight: "500",
      [theme.breakpoints.down("xs")]: {
        fontSize: "40px",
        width: "100%",
      },
      fontFamily: theme.typography.fontFamily,
    },
    titleWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
      position: "absolute",
      top: 150,
      left: 100,
      rowGap: "20px",
      [theme.breakpoints.down("md")]: {
        position: "relative",
        top: "auto",
        left: "auto",
        padding: "0px 50px",
        alignItems: "center",
      },
    },
    titleContainer: {
      display: "flex",
      flexDirection: "column",
      rowGap: "20px",
      width: "450px",

      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
      [theme.breakpoints.down("md")]: {
        marginBottom: "100px",
      },
    },
    main: {
      [theme.breakpoints.down("md")]: {
        height: "calc(100vh - 110px)",
      },
    },
  })
);

export default useStyles;
