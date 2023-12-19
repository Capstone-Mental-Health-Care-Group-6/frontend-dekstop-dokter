import React, { useState, useEffect } from "react"
import Layouts from "../../components/layouts/Layouts"
import "./PencairanSaldo.css"
import {
  iconCardTarikSaldo,
  iconCardSaldoAktif,
  iconCardProsesPenarikan,
} from "../../../image"
import ModalTarikSaldo from "../../components/fragments/Modal/ModalTarikSaldo"
import CardSaldo from "../../components/fragments/Card/CardSaldo"
import TablePencairanSaldo from "../../components/fragments/TablePencairanSaldo/TablePencairanSaldo"
import { saldoTarik } from "../../service/transaction"
import { withdrawDoctor } from "../../service/transaction"
import { useLogin } from "../../hooks/useLogin"

const PencairanSaldo = () => {
  useLogin()
  const [saldoDokter, setSaldoDokter] = useState({})
  const [saldoPenarikan, setSaldoPenarikan] = useState({})
  const storedId = JSON.parse(localStorage.getItem("id"))

  useEffect(() => {
    saldoTarik(storedId, (responseData) => {
      setSaldoDokter(responseData.data)

      withdrawDoctor((responseData) => {
        const length = responseData.length
        setSaldoPenarikan(responseData[length - 1])
      })
    })
  }, [])

  const updatedDataPencairanSaldo = [
    {
      className: "card__saldo__aktif",
      imgSrc: iconCardSaldoAktif,
      title: "Saldo Aktif",
      subTitle: `Rp ${saldoDokter.doctor_balance || 0}`,
    },
    {
      className: "card__proses__penarikan",
      imgSrc: iconCardProsesPenarikan,
      title: "Proses Penarikan",
      subTitle: `Rp ${saldoPenarikan.balance_req || 0}`,
    },
  ]

  useLogin()

  return (
    <Layouts>
      <div className="pencairan__saldo  bg-white rounded-2 px-2 py-2">
        <h5 className="fw-semibold ms-3 mt-2">Pencairan Saldo</h5>
        <div className="row row-cols-1 row-cols-lg-3 g-2">
          <div className="col">
            <div
              className="card__tarik__saldo rounded-2 bg-white border-0 d-flex justify-content-center align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#modal-tarik-saldo"
            >
              <div className="d-flex justify-content-center align-items-center gap-3">
                <div className="">
                  <img src={iconCardTarikSaldo} alt="icon-card" />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <p className="mt-3 fw-semibold ">Tarik Saldo</p>
                </div>
              </div>
            </div>
          </div>
          {updatedDataPencairanSaldo.map((item, index) => (
            <div className="col" key={index}>
              <CardSaldo
                className={item.className}
                imgSrc={item.imgSrc}
                title={item.title}
                subTitle={item.subTitle}
              />
            </div>
          ))}
        </div>

        <TablePencairanSaldo data={saldoDokter} />
      </div>

      <ModalTarikSaldo
        id={"modal-tarik-saldo"}
        size={"modal-md"}
        storedSaldo={saldoDokter.doctor_balance || "0"}
      />
    </Layouts>
  )
}

export default PencairanSaldo
