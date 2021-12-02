import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomList from "../pages/room-list/RoomList";
import Scheduled from "../pages/scheduled/Scheduled";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/room-list" element={<RoomList />} />
        <Route path="/scheduled" element={<Scheduled />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;