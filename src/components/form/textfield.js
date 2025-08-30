import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const CustomInput = ({ label, type, startAdornment, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      label={label}
      variant="outlined"
      type={type === "password" && showPassword ? "text" : type}
      fullWidth
      InputProps={{
        // startAdornment: startAdornment && (
        //   <InputAdornment position="start">{startAdornment}</InputAdornment>
        // ),
        endAdornment:
          type === "password" ? (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : null,
      }}
      InputLabelProps={{
        shrink: focused || Boolean(props.value),
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(Boolean(props.value))}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#19CB5", // Default border color (light green)
          },
          "&:hover fieldset": {
            borderColor: "#000", // Hover border color (black)
          },
          "&.Mui-focused fieldset": {
            borderColor: "#000", // Focused border color (black)
          },
        },
      }}
      {...props}
    />
  );
};

export default CustomInput;
