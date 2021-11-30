import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./features/user/login/Login";
import Register from "./features/user/register/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;