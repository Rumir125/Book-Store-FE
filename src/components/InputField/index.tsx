import { TextField } from "@mui/material";
import React from "react";
import useStyles from "./styles";

const InputField: React.FC<any> = ({ ...props }) => {
  const classes = useStyles();

  return <TextField className={classes.container} {...props} />;
};

export default InputField;
