import { IBuilding } from "../../types/roomTypes"
import Room from "../room/Room"

interface IProps {
  rooms: IBuilding | undefined,

}

const Building = ({ rooms }: IProps) => {
  if (!rooms) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>{rooms.building}</h2>
      <ul>
        {
          rooms.rooms.map(room => <Room room={ room } />)
        }
      </ul>
    </div>
  )
 }

export default Building