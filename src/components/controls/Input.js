import React from "react";
import { TextField } from "@material-ui/core";

export default function Input(props) {
  const { name, label, value, onChange, type, InputProps } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      type={type}
      size="small"
      onChange={onChange}
      InputProps={InputProps}
      fullWidth
    />
  );
}
