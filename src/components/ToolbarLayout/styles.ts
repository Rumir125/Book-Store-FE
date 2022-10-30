import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",

      width: "100%",
      alignItems: "center",
    },
    button: {
      color: "white",
    },
    username: {
      margin: "auto",
      cursor: "pointer",
    },
    menuIcon: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    logout: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      cursor: "pointer",
    },
  })
);

export default useStyles;
