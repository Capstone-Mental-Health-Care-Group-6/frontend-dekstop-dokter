import * as React from "react"
import { useState, useEffect } from "react"
import Button from "../../components/Elements/button/Button"
import LogoEmphati from "../../assets/LogoEmphati.png"
import Welcome from "../../assets/Welcome.png"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { useNavigate, Link } from "react-router-dom"
import { FaUser, FaLock } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import "./Login.style.css"

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [activeInput, setActiveInput] = useState(null)
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true)
  const navigate = useNavigate()

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
    setActiveInput("username")
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    setActiveInput("password")
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }
  const handleInputFocus = (inputName) => {
    setActiveInput(inputName)
  }

  const handleInputBlur = () => {
    setActiveInput(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/")
    console.log("Username:", username)
    console.log("Password:", password)
  }
  const isPlaceholderShown = (inputValue) => inputValue === ""

  useEffect(() => {
    setIsSubmitButtonDisabled(
      !(username.trim() !== "" && password.trim() !== "")
    )
  }, [username, password])

  return (
    <div className="content-center">
      <div className="container col-lg-12">
        <form className="login-form-container col-lg">
          <img src={LogoEmphati} alt="Login" className="logo mb-4" />
          <div className={`floating3`}>
            <div
              className={`icon-input ${
                activeInput === "username" ? "active" : ""
              } ${!isPlaceholderShown(username) ? "not-empty" : ""}`}
            >
              <FaUser width={20} className="me-2" />
            </div>
            <input
              type="username"
              name="username"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              onFocus={() => handleInputFocus("username")}
              onBlur={handleInputBlur}
              placeholder=""
              className={`bg-transparent ${
                activeInput === "username" ? "active" : ""
              }`}
            />
            <label htmlFor="username">
              <div>
                <div></div>
                Username
              </div>
            </label>
          </div>
          <div className={`floating3`}>
            <div
              className={`icon-input ${
                activeInput === "password" ? "active" : ""
              } ${!isPlaceholderShown(password) ? "not-empty" : ""}`}
            >
              <FaLock width={20} className="me-2" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              onFocus={() => handleInputFocus("password")}
              onBlur={handleInputBlur}
              placeholder=""
              className={`bg-transparent ${
                activeInput === "password" ? "active" : ""
              }`}
            />
            <label htmlFor="password">
              <div></div>
              Password
            </label>
            <span className="icon right">
              {showPassword ? (
                <BsEye onClick={handleTogglePassword} />
              ) : (
                <BsEyeSlash onClick={handleTogglePassword} />
              )}
            </span>
          </div>
          <div className="remember d-flex">
            <input type="checkbox" className="checkbox me-2" />
            <Link
              to="/forgot-password"
              className="text-start mt-1 text-decoration-none text-black mb-1"
            >
              Ingat saya?
            </Link>
          </div>
          <Button
            type="submit"
            id="btn-submit"
            className={`btn btn-primary w-100 fw-bold ${
              isSubmitButtonDisabled ? "disabled" : ""
            }`}
            text="Masuk"
            onClick={handleSubmit}
            disabled={isSubmitButtonDisabled}
          />
          <Link
            to="/forgot-password"
            className="forgot-password-link text-end mt-1"
          >
            Forgot Password?
          </Link>
          <div className="divider2 d-flex align-items-center my-1">
            <p className="text-center  mx-3 mb-0 text-muted">atau</p>
          </div>

          <div className="google-button" onClick={handleSubmit}>
            <div className="google-content">
              <div className="google-logo"></div>
              <span className="google-text">Google</span>
            </div>
          </div>

          <p className="text-center mt-3 fw-bold">
            Belum punya akun?{" "}
            <Link to="/register" className="text-decoration-none fw-bold">
              Daftar
            </Link>{" "}
          </p>
        </form>
        <div className="col-lg-1 d-flex justify-content-end pe-2">
          <div className="dividerLogin"></div>
        </div>
        <div className="informasi col-lg">
          <img src={Welcome} alt="Login" className="logoWelcome mb-2" />

          <p className="fw-semibold" style={{ marginTop: "30px" }}>
            Mulailah perjalanan anda dalam berkomitmen menyediakan layanan
            kesehatan mental terbaik
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
