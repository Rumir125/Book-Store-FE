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
      cursor: "default",
    },
    menuIcon: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  })
);

export default useStyles;
