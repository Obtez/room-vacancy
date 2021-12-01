import styles from "./Header.module.scss"

const Header = () => {
  return (
    <>
    <header className={styles.header}>
      <div>
        <p>find <span>vacant</span> room</p>
        <img src="./assets/door-logo.svg" alt="door logo" width="21.5px" height="32.5px" />
      </div>
      </header>
       <div className={styles.polygon}></div>
    </>
  )
}

export default Header