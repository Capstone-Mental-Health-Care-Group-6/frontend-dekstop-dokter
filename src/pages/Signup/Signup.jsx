import * as React from "react"
import { useState } from "react"
import Button from "../../components/elements/Button/Button"
import LogoEmphati from "../../assets/LogoEmphati.png"
import Welcome from "../../assets/Welcome.png"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { useNavigate, Link } from "react-router-dom"
import { FaUser, FaLock } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import "./Signup.style.css"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [activeInput, setActiveInput] = useState(null)
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true)
  const navigate = useNavigate()

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
    setActiveInput("username")
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setActiveInput("email")
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    setActiveInput("password")
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
    setActiveInput("confirmPassword")
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/login")
    console.log("Username:", username)
    console.log("Password:", password)
  }

  React.useEffect(() => {
    setIsSubmitButtonDisabled(
      !(username.trim() !== "" && password.trim() !== "")
    )
  }, [username, password])

  const handleInputFocus = (inputName) => {
    setActiveInput(inputName)
  }

  const handleInputBlur = () => {
    setActiveInput(null)
  }

  const isPlaceholderShown = (inputValue) => inputValue === ""

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
              placeholder="Username"
              className={`bg-transparent ${
                activeInput === "username" ? "active" : ""
              }`}
            />
            <label htmlFor="username">
              {/* <div>
                <div></div>
                Username
              </div> */}
            </label>
          </div>

          <div className={`floating3`}>
            <div
              className={`icon-input ${
                activeInput === "email" ? "active" : ""
              } ${!isPlaceholderShown(email) ? "not-empty" : ""}`}
            >
              <IoMdMail width={20} className="me-2" />
            </div>
            <input
              type="email"
              name="email"
              id="emaildoc"
              value={email}
              onChange={handleEmailChange}
              onFocus={() => handleInputFocus("email")}
              onBlur={handleInputBlur}
              placeholder=" Email "
              className={`bg-transparent ${
                activeInput === "email" ? "active" : ""
              }`}
            />
            <label htmlFor="Email">
              {/* <div>
                <div></div>
                Email
              </div> */}
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
              placeholder="Password"
              className={`bg-transparent ${
                activeInput === "password" ? "active" : ""
              }`}
            />
            <label htmlFor="password">
              <div></div>
            </label>
            <span className="icon right">
              {showPassword ? (
                <BsEye onClick={handleTogglePassword} />
              ) : (
                <BsEyeSlash onClick={handleTogglePassword} />
              )}
            </span>
          </div>

          <div className={`floating3`}>
            <div
              className={`icon-input ${
                activeInput === "confirmPassword" ? "active" : ""
              } ${!isPlaceholderShown(confirmPassword) ? "not-empty" : ""}`}
            >
              <FaLock width={20} className="me-2" />
            </div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onFocus={() => handleInputFocus("confirmPassword")}
              onBlur={handleInputBlur}
              placeholder="Konfirmasi Password"
              className={`bg-transparent ${
                activeInput === "confirmPassword" ? "active" : ""
              }`}
            />
            <label htmlFor="confirmPassword">
              <div></div>
            </label>
            <span className="icon right">
              {showConfirmPassword ? (
                <BsEye onClick={handleToggleConfirmPassword} />
              ) : (
                <BsEyeSlash onClick={handleToggleConfirmPassword} />
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
            text="Daftar"
            onClick={handleSubmit}
            disabled={isSubmitButtonDisabled}
          />

          <p className="text-center mt-3 fw-bold">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-decoration-none fw-bold">
              Masuk
            </Link>{" "}
          </p>
        </form>
        <div className="col-lg-1 d-flex justify-content-end pe-2">
          <div className="divider1"></div>
        </div>
        <div className="informasi col-lg">
          <img src={Welcome} alt="Login" className="logoWelcome mb-2" />

          <p className="fw-semibold">
            Mulailah perjalanan anda dalam berkomitmen menyediakan layanan
            kesehatan mental terbaik
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
