import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "#337ab7",
      padding: "20px 1rem",
    },
    button: {
      color: "white",
    },
    username: {
      margin: "auto",
      cursor: "default",
    },
  })
);

export default useStyles;
