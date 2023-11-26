import "./AturSandi.style.css"

import * as React from "react"
import Button from "../../components/Elements/button/Button"
import ModalReset from "../../components/Fragments/modalReset/modalReset"
import kunci from "../../assets/kunci.png"
import { BsEye, BsEyeSlash, BsShieldLock } from "react-icons/bs"
import { RiLockPasswordLine } from "react-icons/ri"

const ResetPassword = () => {
  const [password, setpassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [showPassNew, setShowPassNew] = React.useState(false)
  const [showPassConfirm, setShowPassConfirm] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false)
  const [isFormFilled, setIsFormFilled] = React.useState(false)

  const handlepasswordChange = (e) => {
    setpassword(e.target.value)
    setIsFormFilled(e.target.value !== "" && confirmPassword !== "")
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
    setIsFormFilled(password !== "" && e.target.value !== "")
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isFormFilled) {
      setShowModal(true)
    }
  }

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
          <div className="floating">
            <input
              type={showPassNew ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={handlepasswordChange}
              placeholder=""
            />
            <label htmlFor="password">Password Baru</label>
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

          <div className="floating mt-4">
            <input
              type={showPassConfirm ? "text" : "password"}
              name="confirmation"
              id="confirmation"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder=""
            />
            <label htmlFor="confirmation">Konfirmasi Password Baru</label>
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
