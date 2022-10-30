import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      overflow: "hidden",
      zIndex: -1,
      backgroundColor: "#ddceb6",
    },
    imageContainer: {
      top: -36,
      left: 31,
      position: "absolute",
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
  })
);

export default useStyles;
