import { Button } from "@mui/material";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function SMButton(props) {
  const { label, onClick, disabled, startIcon, endIcon, loading } = props;
  return (
    <>
      <Button
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={onClick}
        variant="contained"
        disabled={loading || disabled}
      >
        {loading ? <CircularProgress /> : label}
      </Button>
    </>
  );
}
export default SMButton;
