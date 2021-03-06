import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../../style/style.css";
import telephone from "../../../img/telephone.png";
import { useAuth } from "../../../hooks/use-auth";
import { removeUser } from "../../../store/slices/userSlice";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

const NavbarLower = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  const logAuth = () => dispatch(removeUser());
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    dispatch(removeUser());
  };

  return (
    <div className="NavbarLower-bottom">
      <div className="NavbarLower ">
        <div className="NavbarLower NavbarLower-logo">
          <h2 className="logo">
            новости.<span>kg</span>
          </h2>
        </div>
        <div className="NavbarLower-navigate">
          <button className="button NavbarLower-navigate-">Главная</button>
          <button className="button NavbarLower-navigate-">
            Актуальные новости
          </button>
          <button className="button NavbarLower-navigate-">Контакты</button>
        </div>
        <div className="NavbarLower NavbarLower_phone">
          <div className="NavbarLower NavbarLover_mobile_block">
            <img src={telephone} alt="Звонок" />
            <div className="NavbarLover_title">
              <p>+996 777 777 777</p>
              <p>Заказать звонок</p>
            </div>
          </div>
          <Tooltip title="Аккаунт">
            {isAuth ? (
              <IconButton onClick={logAuth()} sx={{ p: 0 }}>
                {email}
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            ) : (
              <Link to="/register" style={{ textDecoration: "none" }}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {email}
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Link>
            )}
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default NavbarLower;
