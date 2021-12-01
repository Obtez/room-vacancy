import Banner from "../banner/Banner"
import MobileMenu from "../mobile-menu/MobileMenu"
import styles from "./Header.module.scss"

interface IProps {
  bannerType: string
}

const Header = ({bannerType}: IProps) => {
  return (
    <>
    <header className={styles.header}>
      <div>
        <p>find <span>vacant</span> room</p>
        <img src="./assets/door-logo.svg" alt="door logo" width="21.5px" height="32.5px" />
      </div>
      </header>
      <div className={styles.polygon}></div>
      <Banner type={bannerType} />
      <MobileMenu />
    </>
  )
}

export default Header