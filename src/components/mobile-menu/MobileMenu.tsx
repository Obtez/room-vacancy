import {useState} from 'react'
import { Link } from "react-router-dom"
import {HiOutlineMenu} from 'react-icons/hi'
import styles from "./MobileMenu.module.scss"
import Banner from "../banner/Banner"
import Header from '../header/Header'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.mobileMenu}>
      {
        isOpen ? (
          <div>
            <Header bannerType="back" />
            <ul>
              <li><Link to="/account">Account Info</Link>Account Info</li>
              <li><Link to="/room-list">Find Vacant Room</Link></li>
              <li><Link to="/advanced-search">Advanced Search</Link></li>
              <li><Link to="/scheduled">Scheduled Rooms</Link></li>
            </ul>
            <Link to="/">LOGOUT</Link>
          </div>
        ) : (
            <HiOutlineMenu className={styles.menuToggle} onClick={handleClick} />
        )
      }
    </div>
  )
}

export default MobileMenu