import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      margin: "0px auto",
      // width: "500px",
    },
    title: {
      display: "flex",
      justifyContent: "center",
      paddingBottom: "20px",
    },
    imageWrapper: { display: "flex", justifyContent: "center" },
    image: {
      width: "300px",
      height: "600px",
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
