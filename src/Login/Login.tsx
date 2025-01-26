import { TextField, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Login.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FC4747",
      contrastText: "#fff",
    },
  },
});

export default function Login() {
  return (
    <div className="login">
      <p> Login</p>
      <div className="credentials-text-input-container">
        <div className="text-input-button-container">
          <ThemeProvider theme={theme}>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              // sx={{ color: "white" }}
              color="primary"
              aria-label="email input"
            />

            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              sx={{ color: "white" }}
              color="primary"
              aria-label="password input"
            />
          </ThemeProvider>
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#FC4747", color: "#ffffffb3" }}
          >
            Text
          </Button>
          <span className="sign-up-action-text">Don't have an account</span>
        </div>
      </div>
    </div>
  );
}
