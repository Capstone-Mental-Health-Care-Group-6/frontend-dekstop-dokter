import "./AturSandi.style.css"
import { useState } from "react"
import * as React from "react"
import Button from "../../components/elements/Button/Button"
import ModalReset from "../../components/Fragments/modalReset/modalReset"
import kunci from "../../assets/kunci.png"
import { BsEye, BsEyeSlash, BsShieldLock } from "react-icons/bs"
import { RiLockPasswordLine } from "react-icons/ri"
import {
  confirmPasswordHandler,
  passwordChecker,
  passwordHandler,
} from "../../utils/handler/input"

const ResetPassword = () => {
  const [password, setpassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassNew, setShowPassNew] = useState(false)
  const [showPassConfirm, setShowPassConfirm] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isFormFilled, setIsFormFilled] = useState(false)
  const [errorMessages, setErrorMessages] = useState({
    password: "",
    confirmPassword: "",
  })

  const handlepasswordChange = (e) => {
    passwordHandler(e.target.value, setErrorMessages)
    setpassword(e.target.value)
    setIsFormFilled(e.target.value !== "" && confirmPassword !== "")
  }

  const handleConfirmPasswordChange = (e) => {
    confirmPasswordHandler(e.target.value, setErrorMessages, password)
    setConfirmPassword(e.target.value)
    setIsFormFilled(password !== "" && e.target.value !== "")
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate password and confirmPassword
    if (errorMessages.password || errorMessages.confirmPassword) {
      // Tampilkan pesan kesalahan jika password atau konfirmasi password tidak valid
      return
    }

    // Proceed with resetting password if validation is successful
    if (isFormFilled) {
      setShowModal(true)
    }
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   if (isFormFilled) {
  //     setShowModal(true)
  //   }
  // }

  const handleTogglePasswordNew = () => {
    setShowPassNew(!showPassNew)
  }

  const handleTogglePasswordConfirm = () => {
    setShowPassConfirm(!showPassConfirm)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="content-center">
      <div className="kotak">
        <img src={kunci} alt="Login" className="kunci" />
        <h5 className="textSandi">Buat Kata Sandi Baru</h5>
        <p>
          kata sandi anda minimal harus enam karakter dan berisi kombinasi
          angka, huruf, dan karakter khusus (!$@%).
        </p>

        <form className="reset-password-form-container" onSubmit={handleSubmit}>
          <div className="vstack gap-1">
            <div className="floating">
              <input
                type={showPassNew ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={handlepasswordChange}
                placeholder="Password Baru"
              />
              <label htmlFor="password"></label>
              <span className="icon left">
                <RiLockPasswordLine />
              </span>
              <span className="icon right">
                {showPassNew ? (
                  <BsEyeSlash onClick={handleTogglePasswordNew} />
                ) : (
                  <BsEye onClick={handleTogglePasswordNew} />
                )}
              </span>
            </div>
            {errorMessages.password !== "" && (
              <p className="text-start text-danger">{errorMessages.password}</p>
            )}
          </div>

          <div className="vstack gap-1">
            <div className="floating mt-4">
              <input
                type={showPassConfirm ? "text" : "password"}
                name="confirmation"
                id="confirmation"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Konfirmasi Password Baru"
              />
              <label htmlFor="confirmation"></label>
              <span className="icon left">
                <RiLockPasswordLine />
              </span>
              <span className="icon right">
                {showPassConfirm ? (
                  <BsEyeSlash onClick={handleTogglePasswordConfirm} />
                ) : (
                  <BsEye onClick={handleTogglePasswordConfirm} />
                )}
              </span>
            </div>
            {errorMessages.confirmPassword !== "" && (
              <p className="text-start text-danger">
                {errorMessages.confirmPassword}
              </p>
            )}
          </div>

          <Button
            type="submit"
            id="btn-submit"
            className={`mt-4 btn btn-primary w-100 fw-bold ${
              !isFormFilled ? "disabled" : ""
            }`}
            text="Atur ulang kata sandi"
            disabled={!isFormFilled}
          />
        </form>

        {showModal && <ModalReset onClose={handleCloseModal} />}
      </div>
    </div>
  )
}

export default ResetPassword
