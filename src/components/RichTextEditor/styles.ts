import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      "& .ql-toolbar.ql-snow": {
        border: "1px solid grey",
        borderRadius: "5px",
      },

      "& .ql-container.ql-snow": {
        minHeight: "100px",
        maxHeight: "500px",
        overflow: "overlay",
        // maxWidth: "750px",
        border: "1px solid grey",
        borderRadius: "5px",
      },
    },
  })
);

export default useStyles;
