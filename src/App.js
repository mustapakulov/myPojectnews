import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import AddNews from "./components/CRUD/AddNews";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/add" element={<AddNews />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
