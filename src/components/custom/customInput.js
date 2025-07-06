"use client";
import React from "react";
import { TextField } from "@mui/material";

export default function CustomInput({
  label,
  name,
  value,
  onChange,
  multiline = false,
  rows = 1,
  required = false,
  type = "text",
}) {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      fullWidth
      type={type}
      multiline={multiline}
      rows={rows}
      variant="outlined"
      size="small"
    />
  );
}
