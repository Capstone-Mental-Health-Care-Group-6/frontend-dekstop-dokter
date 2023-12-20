import { useState, useEffect } from "react"
import Button from "../../components/elements/Button/Button"
import LogoEmphati from "../../assets/logoEmphati.png"
import Welcome from "../../assets/Welcome.png"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { useNavigate, Link } from "react-router-dom"
import { FaUser, FaLock } from "react-icons/fa"
import { jwtDecode } from "jwt-decode"
import "./Login.style.css"
import { BsExclamationCircle } from "react-icons/bs"
import { IoMdMail } from "react-icons/io"
import {
  passwordChecker,
  passworLogindHandler,
  emailHandler,
  emailChecker,
} from "../../utils/handler/input"
import { login } from "../../service/authentication"
import { useDispatch, useSelector } from "react-redux"
import { setDataLogin } from "../../service/userSlice"

const LoginForm = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const storedDataLogin = JSON.parse(localStorage.getItem("dataLogin"))
    if (storedDataLogin) {
      dispatch(setDataLogin(storedDataLogin))
    }
  }, [dispatch])

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [activeInput, setActiveInput] = useState(null)
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true)
  const [alertLogin, setAlertLogin] = useState("d-none")
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    emailHandler(e.target.value, setErrorMessages)
    setEmail(e.target.value)
    setActiveInput("email")
  }

  const handlePasswordChange = (e) => {
    passworLogindHandler(e.target.value, setErrorMessages)
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

  const validateInputs = () => {
    let isValid = true

    if (!emailChecker(email) || !passwordChecker(password)) {
      emailHandler(email, setErrorMessages)
      passworLogindHandler(password, setErrorMessages)
      isValid = false
    }

    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formLogin = {
      email,
      password,
    }

    if (validateInputs()) {
      login(formLogin, (status, res) => {
        if (status) {
          navigate("/dokter/dashboard")
          localStorage.setItem("token", res.data.token.access_token)
          const decoded = jwtDecode(res.data.token.access_token)
          localStorage.setItem("id", JSON.stringify(decoded.id))
          console.log("berhasil login", res)
          dispatch(setDataLogin(res.data))
          const dataLogin = res.data
          console.log("ini datalogin", dataLogin)
          localStorage.setItem("dataLogin", JSON.stringify(dataLogin.name))
        } else {
          setAlertLogin("d-block")
          console.log(res)
        }
      })
    }
  }

  const isPlaceholderShown = (inputValue) => inputValue === ""

  useEffect(() => {
    setIsSubmitButtonDisabled(!(email.trim() !== "" && password.trim() !== ""))
  }, [email, password])

  return (
    <div className="content">
      <div className="container col-lg-12">
        <form className="login-form-container col-lg">
          <img src={LogoEmphati} alt="Login" className="logo mb-4" />
          <div className="vstack gap-2">
            <div className={`floating3`}>
              <div
                className={`icon-input 
                  ${activeInput === "email" ? "active" : ""} 
                  ${!isPlaceholderShown(email) ? "not-empty" : ""}
                  ${errorMessages.email !== "" ? "error" : ""}
                `}
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
                className={`bg-transparent 
                  ${activeInput === "email" ? "active" : ""}
                  ${errorMessages.email !== "" ? "error" : ""}
                `}
              />
              <span className="icon right">
                {errorMessages.email !== "" && (
                  <BsExclamationCircle className="text-danger" />
                )}
              </span>
            </div>
            {errorMessages.email !== "" && (
              <span className="text-start text-danger">
                {errorMessages.email}
              </span>
            )}
          </div>

          <div className="vstack gap-2">
            <div className={`floating3 pb-0`}>
              <div
                className={`icon-input 
                ${activeInput === "password" ? "active" : ""} 
                ${!isPlaceholderShown(password) ? "not-empty" : ""}
                ${errorMessages.password !== "" ? "error" : ""}
              `}
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
                placeholder="Kata Sandi"
                className={`bg-transparent 
                ${activeInput === "password" ? "active" : ""}
                ${errorMessages.password !== "" ? "error" : ""}
              `}
              />
              <label htmlFor="password">
                <div></div>
              </label>
              <span className="icon right">
                {errorMessages.password !== "" && (
                  <BsExclamationCircle className="text-danger" />
                )}
                {showPassword ? (
                  <BsEye onClick={handleTogglePassword} />
                ) : (
                  <BsEyeSlash onClick={handleTogglePassword} />
                )}
              </span>
            </div>
            {errorMessages.password !== "" && (
              <span className="text-start text-danger">
                {errorMessages.password}
              </span>
            )}
          </div>

          <div className="remember d-flex">
            <input type="checkbox" className="checkbox me-2" />
            <p className="text-start mt-1 text-decoration-none text-black mb-1">
              Ingat saya?
            </p>
          </div>
          <p className={`text-start text-danger m-0 ${alertLogin}`}>
            Email atau Password tidak valid{" "}
          </p>
          <Button
            type="submit"
            id="btn-submit"
            className={`bttn btn-secondary w-100 fw-bold ${
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
            <Link
              to="/register-dokter"
              className="text-decoration-none fw-bold"
            >
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

export default LoginForm
