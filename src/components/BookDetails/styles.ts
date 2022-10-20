import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      margin: "0px auto",
      width: "fit-content",
    },
    title: {
      display: "flex",
      justifyContent: "center",
    },
    imageWrapper: { display: "flex", justifyContent: "center" },
    image: {
      width: "128px",
      height: "128px",
      borderRadius: "5px",
    },
    typography: {
      margin: "5px 0px",
    },
    footer: {
      display: "flex",
      justifyContent: "center",
    },
  })
);

export default useStyles;
