import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "flex-end",
      paddingTop: "20px",
    },
  })
);

export default useStyles;
