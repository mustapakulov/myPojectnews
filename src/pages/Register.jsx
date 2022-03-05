import { Link } from "react-router-dom";
import { SignUp } from "../components/auth/SignUp";
import { Button } from "@mui/material";

const Register = () => {
  return (
    <div className="authPage">
      <h1>Регистрация</h1>
      <SignUp />
      <p>
        Если у вас есть аккаунт{" "}
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="success">
            Вход в акаунт
          </Button>
        </Link>{" "}
      </p>
    </div>
  );
};

export default Register;
