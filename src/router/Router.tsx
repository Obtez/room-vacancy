import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomList from "../pages/room-list/RoomList";
import Login from "../pages/login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoomList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;