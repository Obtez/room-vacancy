import styles from "./Header.module.scss"

interface IProps {
  text: string
}

const Header = ({text}: IProps) => {
  return (
    <>
    <header className={styles.header}>
      <div>
        <p>{text || "No header text provided"}</p>
        <img src="./assets/door-logo.svg" alt="door logo" width="21.5px" height="32.5px" />
      </div>
      </header>
       <div className={styles.polygon}></div>
    </>
  )
}

export default Header