import React from "react";
import Group from "../../../img/Group.png";
import email from "../../../img/email.png";
import { newsContext } from "../../../Context/ContextMy";
import "../../style/style.css";

import "./navbar.css";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const Navbar = () => {
  const { useAuth } = React.useContext(newsContext);
  const currentUser = useAuth();
  const [count, setCount] = React.useState(0);

  return (
    <div className="navbar">
      <div className="navbar-navigate">
        <div className="navbar-navigate">
          <img src={Group} alt="Ваша место положение!" />
          <p className="location-title">Бишкек</p>
        </div>
        {currentUser?.email === "admin@mail.ru" ? (
          <div className="admin_panel">
            <Link
              to="/add"
              style={{
                textDecoration: "none",
                alignItems: "center",
                display:'flex',
                color:'#676767'
              }}
              
            >
              <AddIcon />
              <h3>Добавить новость</h3>
            </Link>
          </div>
        ) : (
          <>
            <p style={{ fontSize: "20px", marginTop: "13px" }}>
              {count ? count : ""}
            </p>
          </>
        )}
        <div className="navbar-navigate">
          <div className="navbar-navigate block">
            <img src={email} alt="Почта" />
            <p>novostykg@mail.ru</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
