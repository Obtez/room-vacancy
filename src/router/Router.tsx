import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomList from "../pages/room-list/RoomList";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoomList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;