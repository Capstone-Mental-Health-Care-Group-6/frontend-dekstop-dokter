import { useState, useEffect } from "react";
import Button from "../../components/elements/Button/Button";
import LogoEmphati from "../../assets/logoEmphati.png";
import Welcome from "../../assets/Welcome.png";
import { BsExclamationCircle, BsEye, BsEyeSlash } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "./Signup.style.css";
import {
  confirmPasswordHandler,
  emailChecker,
  emailHandler,
  passwordChecker,
  passwordHandler,
  usernameChecker,
  usernameHandler,
} from "../../utils/handler/input";
import { register } from "../../service/authentication";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  const [errorMessages, setErrorMessages] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    usernameHandler(e.target.value, setErrorMessages);
    setUsername(e.target.value);
    setActiveInput("username");
  };

  const handleEmailChange = (e) => {
    emailHandler(e.target.value, setErrorMessages);
    setEmail(e.target.value);
    setActiveInput("email");
  };

  const handlePasswordChange = (e) => {
    passwordHandler(e.target.value, setErrorMessages);
    setPassword(e.target.value);
    setActiveInput("password");
  };

  const handleConfirmPasswordChange = (e) => {
    confirmPasswordHandler(e.target.value, setErrorMessages, password);
    setConfirmPassword(e.target.value);
    setActiveInput("confirmPassword");
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const doPasswordMatch = (password, confirmationPassword) => {
    return password === confirmationPassword;
  };

  const handleFormErrors = () => {
    usernameHandler(username, setErrorMessages);
    emailHandler(email, setErrorMessages);
    passwordHandler(password, setErrorMessages);
    confirmPasswordHandler(confirmPassword, setErrorMessages, password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid =
      usernameChecker(username) &&
      emailChecker(email) &&
      passwordChecker(password) &&
      doPasswordMatch(password, confirmPassword);

    if (isValid) {
      if (username.length >= 4) {
        const formRegister = {
          name: username,
          email,
          password,
          role: "Doctor",
        };
        console.log(formRegister);
        register(formRegister, (status, res) => {
          if (status) {
            navigate("/login-dokter");
            console.log("berhasil resgister", res);
          } else {
            console.log(res);
          }
        });
      } else {
        setErrorMessages({
          ...errorMessages,
          username: "Masukan username terlebih dahul",
        });
      }
    } else {
      handleFormErrors();
    }
  };

  useEffect(() => {
    setIsSubmitButtonDisabled(
      !(username.trim() !== "" && password.trim() !== "")
    );
  }, [username, password]);

  const handleInputFocus = (inputName) => {
    setActiveInput(inputName);
  };

  const handleInputBlur = () => {
    setActiveInput(null);
  };

  const isPlaceholderShown = (inputValue) => inputValue === "";

  return (
    <div className="content-center">
      <div className="container col-lg-12">
        <form className="login-form-container col-lg">
          <img src={LogoEmphati} alt="Login" className="logo mb-4" />
          <div className="vstack gap-2">
            <div className={`floating3`}>
              <div
                className={`icon-input 
                  ${activeInput === "username" ? "active" : ""} 
                  ${!isPlaceholderShown(username) ? "not-empty" : ""}
                  ${errorMessages.username !== "" ? "error" : ""}
                `}
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
                className={`bg-transparent 
                  ${activeInput === "username" ? "active" : ""}
                  ${errorMessages.username !== "" ? "error" : ""}
                `}
              />
              <span className="icon right">
                {errorMessages.username !== "" && (
                  <BsExclamationCircle className="text-danger" />
                )}
              </span>
            </div>
            {errorMessages.username !== "" && (
              <span className="text-start text-danger">
                {errorMessages.username}
              </span>
            )}
          </div>

          <div className="vstack gap-1">
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

          <div className="vstack gap-1">
            <div className={`floating3`}>
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

          <div className="vstack gap-1">
            <div className={`floating3`}>
              <div
                className={`icon-input 
                  ${activeInput === "confirmPassword" ? "active" : ""} 
                  ${!isPlaceholderShown(confirmPassword) ? "not-empty" : ""}
                  ${errorMessages.confirmPassword !== "" ? "error" : ""}
                `}
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
                placeholder="Konfirmasi Kata Sandi"
                className={`bg-transparent 
                  ${activeInput === "confirmPassword" ? "active" : ""}
                  ${errorMessages.confirmPassword !== "" ? "error" : ""}
                `}
              />
              <label htmlFor="confirmPassword">
                <div></div>
              </label>
              <span className="icon right">
                {errorMessages.confirmPassword !== "" && (
                  <BsExclamationCircle className="text-danger" />
                )}
                {showConfirmPassword ? (
                  <BsEye onClick={handleToggleConfirmPassword} />
                ) : (
                  <BsEyeSlash onClick={handleToggleConfirmPassword} />
                )}
              </span>
            </div>
            {errorMessages.confirmPassword !== "" && (
              <span className="text-start text-danger">
                {errorMessages.confirmPassword}
              </span>
            )}
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
            className={`bttn btn-secondary w-100 fw-bold 
              ${isSubmitButtonDisabled ? "disabled" : ""}
            `}
            text="Daftar"
            onClick={handleSubmit}
            disabled={isSubmitButtonDisabled}
          />

          <p className="text-center mt-3 fw-bold">
            Sudah punya akun?{" "}
            <Link to="/login-dokter" className="text-decoration-none fw-bold">
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
  );
};

export default Register;
