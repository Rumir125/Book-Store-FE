import { TextField } from "@mui/material";
import React, { forwardRef } from "react";
import useStyles from "./styles";

const InputField: React.FC<any> = forwardRef<React.FC<any>, any>(
  ({ register, name, ...props }, ref) => {
    const classes = useStyles();

    return (
      <TextField className={classes.container} {...register(name)} {...props} />
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
