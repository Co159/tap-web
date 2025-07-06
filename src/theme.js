import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#000" },
    secondary: { main: "#fff" },
    text: {
      primary: "#000",
      secondary: "#666",
    },
  },
});

export default theme;
