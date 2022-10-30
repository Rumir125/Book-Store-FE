import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      margin: "6px 0px",
    },
    username: {
      margin: "auto",
      cursor: "pointer",
    },
  })
);

export default useStyles;
