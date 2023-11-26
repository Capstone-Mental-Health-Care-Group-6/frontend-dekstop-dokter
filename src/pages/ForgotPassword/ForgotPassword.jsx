import "./ForgetPassword.style.css"

import * as React from "react"
import Button from "../../components/elements/Button/Button"

import ModalForgot from "../../components/fragments/modalLogin/modalLogin"

import { MdOutlineEmail } from "react-icons/md"
import logoEmpathi from "../../assets/LogoEmphati.png"
import { useNavigate } from "react-router-dom"

const ForgotPw = () => {
  const [email, setEmail] = React.useState("")
  const [isEmailSent, setIsEmailSent] = React.useState(false)
  const [isEmailVerified, setIsEmailVerified] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleForgotPassword = async () => {
    try {
      setIsEmailSent(true)
      setIsEmailVerified(true)
      setTimeout(() => {
        setIsModalOpen(true)
      }, 1000)
      // navigate('/ModalLogin');
    } catch (error) {
      console.error("Gagal mengirim email reset:", error)
    }
  }

  return (
    <div className="content-center">
      <div className="awal">
        <img src={logoEmpathi} alt="Login" className="center-image" />
        <h2 className="textAdmin"> Atur Ulang Kata Sandi Anda </h2>
        <p className="textEmail">
          Masukkan email yang terkait dengan akun Anda untuk mengubah kata sandi
          baru.
        </p>
        <form className="login-form-container">
          <div className="floating">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />
            <label htmlFor="email"></label>
            <span className="icon left">
              <MdOutlineEmail />
            </span>
          </div>
          <Button
            type="button"
            id="btn-submit"
            className={`btn btn-primary w-100 fw-bold ${
              email ? "" : "disabled"
            }`}
            text="Kirim link verifikasi"
            onClick={handleForgotPassword}
            disabled={!email || !isEmailVerified}
          />
          <div className="divider d-flex align-items-center my-1">
            <p className="text-center mx-3 mb-0 text-muted">atau</p>
          </div>
          <p className="btn-akun">
            <b>Buat Akun Baru </b>
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
  )
}

export default ForgotPw
