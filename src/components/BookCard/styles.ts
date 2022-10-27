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
      cursor: "pointer",
      maxWidth: "300px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    title: {
      textAlign: "center",
    },
    imageWrapper: { display: "flex", justifyContent: "center" },
    image: {
      width: "128px",
      height: "128px",
      borderRadius: "5px",
    },
    typography: {
      margin: "2px auto",
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
    },
    icon: {
      "&:hover": { boxShadow: "4px 4px #888888" },
    },
  })
);

export default useStyles;
