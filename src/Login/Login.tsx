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
      {/* login icon  */}
      <svg
        width="33"
        height="27"
        className="app-logo"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
          fill="#FC4747"
        />
      </svg>
      <div className="credentials-text-input-container">
        <div className="text-input-button-container">
          <h2 className="login-heading">Login</h2>
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
          <span className="sign-up-action-text">
            Don't have an account?{" "}
            <Button color="primary" variant="text" sx={{ color: "#FC4747 " }}>
              Sign Up
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}
