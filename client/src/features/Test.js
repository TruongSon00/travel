import React, { useCallback, Fragment } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useSnackbar } from "notistack";

const Test = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("button.message", { variant: "success" });
  };

  return (
    <Button variant="outlined" onClick={handleClick}>
      default
    </Button>
  );
};

export default Test;
