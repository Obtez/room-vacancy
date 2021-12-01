import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomList from "../pages/room-list/RoomList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoomList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;