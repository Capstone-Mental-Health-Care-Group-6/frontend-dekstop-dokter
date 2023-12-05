// import Modal from "react-bootstrap/Modal"
import { Modal } from "react-bootstrap"
import { Button } from "react-bootstrap"

// import Button from "react-bootstrap/Button"
import "./ModalLogin.style.css"
import { FaCheckCircle } from "react-icons/fa"

const ModalForgot = ({ title, email, btnSuccess, onClose }) => {
  return (
    <Modal show onHide={onClose} centered>
      <Modal.Body className="modal-content-container">
        <div>
          <div style={{ marginBottom: 64 }}>
            <center>
              <FaCheckCircle size={77} color="#29B753" />
            </center>
          </div>
          <div className="modal-header-container">
            <center>
              <h5
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#323232",
                }}
              >
                {title}
              </h5>
            </center>
          </div>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: 14,
              fontWeight: 400,
              color: "#636363",
              textAlign: "center",
            }}
          >
            Kami telah mengirimkan email ke{" "}
            <b style={{ color: "#323232" }}>{email}</b> Jika email ini terhubung
            ke akun Emphaticare, Anda akan dapat mengatur ulang kata sandi.
          </p>
          <div className="modal-footer-container">
            <center>
              <Button variant="link" onClick={onClose}>
                {btnSuccess}
              </Button>
            </center>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalForgot
