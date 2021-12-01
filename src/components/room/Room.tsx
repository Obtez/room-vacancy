import { IRoom } from "../../types/roomTypes"

interface IProps {
  room: IRoom | undefined
}

const Room = ({ room }: IProps) => {

  if (!room) {
    return null
  }

  return (
    <li>
      <p>Room - { room.name }</p>
    </li>
  )
}

export default Room