import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    inputWrapper: { width: "fit-content", margin: "auto" },
    cancelButtonWrapper: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "20px",
      columnGap: "10px",
    },
    textField: {
      width: "500px",
    },
  })
);

export default useStyles;
