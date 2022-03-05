import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./NavbarLower.css";
import telephone from "../../../img/telephone.png";
import { useAuth } from "../../../hooks/use-auth";
import { removeUser } from "../../../store/slices/userSlice";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

const NavbarLower = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  const logAith = () => dispatch(removeUser());

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    dispatch(removeUser());
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
        <div className="NavbarLower">
          <img src={telephone} alt="Звонок" />
          <div className="">
            <p>+996 777 777 777</p>
            <p>Заказать звонок</p>
          </div>
        </div>
        <div className="NavbarLower">
          <div>
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                ></Menu>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Выйти с аккаунта">
                  {isAuth ? (
                    <IconButton onClick={logAith()} sx={{ p: 0 }}>
                      {email}
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  ) : (
                    <Link to="/register" style={{ textDecoration: "none" }}>
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        {email}
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/2.jpg"
                        />
                      </IconButton>
                    </Link>
                  )}
                </Tooltip>
              </Box>
            </Toolbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarLower;
