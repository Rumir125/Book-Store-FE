import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      margin: "20px",
      border: "1px solid black",
      borderRadius: "10px",
      padding: "10px 20px",
      boxShadow: "2px 2px #888888",
      minWidth: "200px",
      "&:hover": {
        boxShadow: "4px 4px #888888",
      },
    },
    title: {
      width: "fit-content",
      marginLeft: "auto",
      marginRight: "auto",
    },
  })
);

export default useStyles;
