import { IRoom } from "../../types/roomTypes"
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import {GoTriangleRight, GoTriangleDown} from 'react-icons/go'
import styles from "./Room.module.scss"

interface IProps {
  room: IRoom | undefined
}

const Room = ({ room }: IProps) => {

  if (!room) {
    return null
  }

  return (
    <li className={styles.room}>
      <GoTriangleRight className={ styles.toggleIcon }/>
      <div className={styles.roomData}>
        <p>Room - {room.name}</p>
        <AiOutlineCheckCircle className={styles.success} />
      </div>
    </li>
  )
}

export default Room