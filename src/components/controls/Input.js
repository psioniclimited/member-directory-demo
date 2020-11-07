import React from "react";
import { TextField } from "@material-ui/core";

export default function Input(props) {
  const {
    name,
    label,
    value,
    type,
    InputProps,
    error = null,
    onChange,
  } = props;

  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      type={type}
      size="small"
      InputProps={InputProps}
      fullWidth
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  );
}
