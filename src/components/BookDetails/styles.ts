import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      margin: "0px auto",
      width: "500px",
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
      justifyContent: "flex-end",
      columnGap: "15px",
    },
  })
);

export default useStyles;
