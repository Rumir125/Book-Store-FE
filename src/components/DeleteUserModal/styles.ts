import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      position: "absolute" as "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      backgroundColor: "white",
      border: "2px solid #000",
      //   p: 4,
      padding: "20px",
      borderRadius: "10px",
    },
    subtitle: {
      mt: 2,
      paddingBottom: "20px",
    },
    cancelButton: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);

export default useStyles;
