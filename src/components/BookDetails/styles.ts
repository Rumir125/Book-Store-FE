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
      cursor: "pointer",
      "&:hover": {
        boxShadow: "4px 4px #888888",
      },
    },
    title: {
      width: "fit-content",
      marginLeft: "auto",
      marginRight: "auto",
    },
    imageWrapper: { display: "flex", justifyContent: "center" },
    image: {
      width: "128px",
      height: "128px",
    },
    typography: {
      margin: "5px 0px",
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);

export default useStyles;
