import Navbar from "../components/Nav/Navbar/Navbar";
import NavbarLower from "../components/Nav/NavbarLower/NavbarLower";
import DisplayList from "../components/CRUD/DisplayList";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <NavbarLower />
      <DisplayList />
    </div>
  );
};

export default HomePage;
