import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
   
    </Routes>
  );
}

export default App;
