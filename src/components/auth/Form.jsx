import {
  CssBaseline,
  Grid,
  Button,
  Link,
  Container,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";

import React, { useState } from "react";

import "../style/style.css";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <Container>
      <CssBaseline />
      <div className="login">
        <div className="loginContainer">
          <Box component="form" noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <p className="errorMsg">Ваш логин:</p>
                <TextField
                  required
                  fullWidth
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  autoComplete="email"
                  sx={{ borderRadius: "50%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <p className="errorMsg">Ваш пароль:</p>
                <TextField
                  required
                  fullWidth
                  name="password"
                  type="password"
                  onChange={(e) => setPass(e.target.value)}
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <div className="btnContainer">
              <>
                <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
                  {" "}
                  {/* <p className="labelRegister"> У вас есть аккаунт? </p> */}
                  <Link to="/register">
                    <Button
                      onClick={() => handleClick(email, pass)}
                      variant="contained"
                      color="success"
                    >
                      {title}
                    </Button>
                  </Link>{" "}
                </Grid>
              </>
            </div>
          </Box>
        </div>
      </div>
    </Container>
  );
};

export { Form };
