import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import { matchRoomsToBuildings, getBuildingsFromRooms } from "./roomListHelper";
import {rooms} from "../../mocks/roomsMock";
import { IBuilding } from "../../types/roomTypes";
import Building from "../../components/building/Building";
import Filter from "../../components/filter/Filter";
import MobileMenu from "../../components/mobile-menu/MobileMenu";

const RoomList = () => {
  const [roomsByBuilding, setRoomsByBuilding] = useState<IBuilding[]>([]);
  const [buildingList, setBuildingList] = useState<string[]>([]);

  useEffect(() => {
    setRoomsByBuilding(matchRoomsToBuildings(rooms));
    setBuildingList(getBuildingsFromRooms(rooms));
  }, []);

  return (
    <div>
      <Header bannerType="filter" />
      {
        buildingList.map(building => {
          const rooms = roomsByBuilding.find(b => b.building === building);
          return <Building key={building} rooms={rooms} />
        })
      }
    </div>
  )
}

export default RoomList;