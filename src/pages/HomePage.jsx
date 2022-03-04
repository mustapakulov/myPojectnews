
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../store/slices/userSlice";
import { useAuth } from "../hooks/use-auth";
import Navbar from "../components/Nav/Navbar/Navbar";
import NavbarLower from "../components/Nav/NavbarLower/NavbarLower";


const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  return (
    <div>
      
      <Navbar/>
      <NavbarLower/>
      
    

    </div>

  );
};

export default HomePage;
