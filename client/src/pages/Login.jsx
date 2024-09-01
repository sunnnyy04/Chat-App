import {
    Avatar,
    Button,
    Container,
    IconButton,
    Paper,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
  
  const VisuallyHiddenInput = (props) => (
    <input
      type="file"
      style={{ display: "none" }}
      {...props}
    />
  );
  
  const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [avatar, setAvatar] = useState(null);
    const [username, setUsername] = useState("");
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState("");
  
    const toggleLogin = () => {
      setIsLogin((prev) => !prev);
    };
  
    const handleAvatarChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setAvatar(URL.createObjectURL(file)); // Convert file to a URL and set it as avatar
      }
    };
  
    const handleUsernameChange = (e) => {
      const value = e.target.value;
      const regex = /^[a-zA-Z0-9]{6,}$/; // No symbols, at least 6 characters
  
      if (!regex.test(value)) {
        setError(true);
        setHelperText("Username must be at least 6 characters and contain no symbols.");
      } else {
        setError(false);
        setHelperText("");
      }
  
      setUsername(value);
    };
    const handleLogin=(e)=>{
        e.preventDefault()
    }
    const handleSignup=(e)=>{
        e.preventDefault()
    }

  
    return (
      <Container
        component={"main"}
        maxWidth="xl"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",

        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                  alignItems: "center",
                  
                }}
                onSubmit={handleLogin}
              >
                <TextField
                  required
                  type="text"
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  type="password"
                  fullWidth
                  label="Password"
                  margin="normal"
                  variant="outlined"
                />
                <Button fullWidth variant="contained" color="primary" type="submit">
                  Login
                </Button>
                <Typography textAlign={"center"}>Or</Typography>
                <Button fullWidth variant="text" onClick={toggleLogin}>
                  SignUp Instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src={avatar}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    color: "white",
                    right: "0",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }}
                  component="label"
                >
                  <CameraAltIcon />
                  <VisuallyHiddenInput
                    type="file"
                    onChange={handleAvatarChange}
                  />
                </IconButton>
              </Stack>
              <Typography variant="h5">Sign Up</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                  alignItems: "center",
                }}
                onSubmit={handleSignup}
              >
                <TextField
                  required
                  type="text"
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  type="text"
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  type="text"
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  onChange={handleUsernameChange}
                  error={error}
                  helperText={helperText}
                />
                <TextField
                  required
                  type="password"
                  fullWidth
                  label="Password"
                  margin="normal"
                  variant="outlined"
                />
                <Button fullWidth variant="contained" color="primary" type="submit">
                  Sign Up
                </Button>
                <Typography textAlign={"center"}>Or</Typography>
                <Button fullWidth variant="text" onClick={toggleLogin}>
                  Login Instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    );
  };
  
  export default Login;
  