import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import AddNews from "./components/CRUD/AddNews";
import EditNews from "./components/CRUD/EditNews";
import DisplayList from "./components/CRUD/DisplayList";
import DisplayCard from "./components/CRUD/DisplayCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/add" element={<AddNews />} />
      <Route path="/edit/:id" element={<EditNews />} />
      <Route path="/list" element={<DisplayList />} />
      <Route path="/display" element={<DisplayCard />} />
    </Routes>
  );
}

export default App;
