import { FormHelperText, TextField } from "@mui/material";
import React from "react";

function SMInput(props) {
  const {
    label,
    disabled,
    onChange,
    color,
    variant,
    type,
    fullWidth,
    value,
    myClass,
  } = props;
  return (
    <>
      <TextField
        className={myClass}
        color={color}
        label={label}
        disabled={disabled}
        onChange={onChange}
        variant={variant}
        type={type}
        {...props}
      />
    </>
  );
}
export default SMInput;
