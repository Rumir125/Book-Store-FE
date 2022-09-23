import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      "& .ql-container.ql-snow": {
        minHeight: "100px",
        maxHeight: "500px",
        overflow: "overlay",
        maxWidth: "750px",
      },
    },
  })
);

export default useStyles;
