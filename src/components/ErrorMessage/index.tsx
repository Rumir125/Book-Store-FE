import { Typography } from "@mui/material";
import { has } from "lodash";
import React from "react";
import useStyles from "./styles";

const ErrorMessage = ({ errors, name }: any) => {
  const classes = useStyles();
  return (
    <>
      {has(errors, name) && (
        <Typography className={classes.container}>
          {errors[name]?.message}
        </Typography>
      )}
    </>
  );
};

export default ErrorMessage;
