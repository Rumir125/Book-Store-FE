import { Button } from "@mui/material";
import React from "react";
import useStyles from "./styles";

const ActionButton: React.FC<any> = ({ children, isLoading, ...props }) => {
  const classes = useStyles();

  return (
    <Button style={{ color: "white" }} {...props}>
      {isLoading && (
        <span className={classes.svgWrapper}>
          <svg viewBox="22 22 44 44">
            <circle
              className={classes.circle}
              cx="44"
              cy="44"
              r="20.2"
              fill="none"
              stroke-width="3.6"
            ></circle>
          </svg>
        </span>
      )}
      {children}
    </Button>
  );
};

export default ActionButton;
