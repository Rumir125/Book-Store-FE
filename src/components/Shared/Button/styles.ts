import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loadingIndicator: {
      position: "absolute",
      visibility: "visible",
      display: "flex",
      left: "50%",
      transform: "translate(-50%)",
      color: "rgba(0, 0, 0, 0.26)",
    },
    circularProgress: {
      width: "16px",
      height: "16px",
    },
    circle: {
      stroke: "currentcolor",
      strokeDasharray: " 80px, 200px",
      strokeDashoffset: 0,
      animation:
        "1.4s ease-in-out 0s infinite normal none running animation-1p2h4ri",
    },
    svgWrapper: {
      width: "16px",
      height: "16px",
      marginRight: "8px",
      animation: "1.4s linear 0s infinite normal none running animation-61bdi0",
    },
  })
);

export default useStyles;
