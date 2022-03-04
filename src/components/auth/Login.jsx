import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form } from "../auth/Form";
import { setUser } from "../../store/slices/userSlice";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { Grid, Button, Link } from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log({
          email: "email",
          password: "password",
        });
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(() => alert("Такого пользователя нет!"));
  };
  return <Form title="Ваш логин " handleClick={handleLogin} />;
};

export { Login };

