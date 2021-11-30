import { ChangeEvent, useState } from 'react'
import {Link} from 'react-router-dom'
import styles from "./Login.module.scss";

interface LoginData {
  email: string
  password: string
}

const Login = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const [name, value] = [e.target.name, e.target.value]
    setLoginData({...loginData, [name]: value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(loginData)
  }

  return (
    <div className={styles.loginPage}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={loginData.email}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={loginData.password}
          required
        />
        
        <button type="submit">Login</button>
      </form>

      <p>Don't have an account yet? <Link to="/register">Register here</Link>.</p>
    </div>
  )
}

export default Login