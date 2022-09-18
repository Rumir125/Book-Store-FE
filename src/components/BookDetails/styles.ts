import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      margin: "20px",
      border: "1px solid black",
      borderRadius: "10px",
      padding: "10px 20px",
      boxShadow: "5px 5px #888888",
      minWidth: "200px",
    },
    title: {
      width: "fit-content",
      marginLeft: "auto",
      marginRight: "auto",
    },
  })
);

export default useStyles;
