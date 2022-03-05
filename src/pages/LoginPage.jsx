import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Login } from "../components/auth/Login";
import "../components/style/style.css"

const LoginPage = () => {
  return (
    <div className="authPage">
      <h1>Ваш логин</h1>
      <Login />
      <p>
        для{" "}
        <Link to="/register" style={{textDecoration:'none'}}>
          <Button variant="contained" color="success">
            Регистрация
          </Button>
        </Link>{" "}
      </p>
    </div>
  );
};

export default LoginPage;
