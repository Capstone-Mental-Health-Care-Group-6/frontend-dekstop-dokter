import "./ForgetPassword.style.css";
import { useState } from "react";
import Button from "../../components/elements/Button/Button";
import { Link } from "react-router-dom";
import ModalForgot from "../../components/fragments/modalLogin/modalLogin";
import { emailHandler } from "../../utils/handler/input";
import { MdOutlineEmail } from "react-icons/md";
import logoEmpathi from "../../assets/logoEmphati.png";
import { useNavigate } from "react-router-dom";
import { BsExclamationCircle } from "react-icons/bs";
import { forgetPassword } from "../../service/authentication";
const ForgotPw = () => {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    email: "",
  });

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    emailHandler(e.target.value, setErrorMessages);
    setEmail(e.target.value);
  };
  const handleForgotPassword = async () => {
    try {
      if (!email || errorMessages.email) {
        setErrorMessages((prevState) => ({
          ...prevState,
          email: "Masukkan Email Anda!",
        }));
        return;
      }

      setIsEmailSent(true);
      setIsEmailVerified(true);

      const dataEmail = { email: email };

      forgetPassword(dataEmail, (status, res) => {
        if (status) {
          setIsModalOpen(true);
          setEmail("");
        } else {
          console.log(res);
        }
      });
    } catch (error) {
      console.error("Gagal mengirim email reset:", error);
    }
  };

  const isEmailValid = () => {
    return !errorMessages.email;
  };

  return (
    <div className="content-center">
      <div className="awal">
        <img src={logoEmpathi} alt="Login" className="center-image" />
        <h2 className="textAdmin"> Atur Ulang Kata Sandi Anda </h2>
        <p className="textEmail">
          Masukkan alamat email yang terkait dengan akun anda untuk mengubah
          kata sandi.
        </p>
        <form className="login-form-container">
          <div className="vstack gap-1">
            <div className="floating">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                className={`${errorMessages.email !== "" ? "error" : ""}`}
              />
              <span className="icon right">
                {errorMessages.email !== "" && (
                  <BsExclamationCircle className="text-danger" />
                )}
              </span>
              <label htmlFor="email"></label>
              <span className="icon left">
                <MdOutlineEmail />
              </span>
            </div>
            {errorMessages.email !== "" && (
              <span className="text-start text-danger">
                {errorMessages.email}
              </span>
            )}
          </div>
          <Button
            type="button"
            id="btn-submit"
            className={`bttn btn-secondary w-100 fw-bold ${email ? "" : "disabled"
              }`}
            text="Kirim link verifikasi"
            onClick={handleForgotPassword}
          />
          <div className="divider d-flex align-items-center my-1">
            <p className="text-center mx-3 mb-0 text-muted">atau</p>
          </div>
          <p className="text-center fw-bold mx-3 mb-0 text-muted">
            <Link className="link-no-underline" to="/register-dokter">
              Buat Akun Baru
            </Link>
          </p>
        </form>
      </div>

      {isEmailSent && isModalOpen && (
        <ModalForgot
          title="Email Terkirim"
          email={email}
          btnSuccess="Oke"
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ForgotPw;
