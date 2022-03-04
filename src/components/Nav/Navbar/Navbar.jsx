import React from "react";
import Group from "../../../img/Group.png";
import email from "../../../img/email.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-navigate">
        <div className="navbar-navigate">
          <img src={Group} alt="Ваша место положение!" />
          <p className="location-title">Бишкек</p>
        </div>
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
