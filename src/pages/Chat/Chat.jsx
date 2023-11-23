import React from "react";
import Layouts from "../../components/layouts/Layouts";
import "./Chat.css";
import { personChat } from "../../../image";

const Chat = () => {
  return (
    <Layouts>
      <section className="chat-page" id="chat-page">

        <div className="row d-flex justify-content-between gap-2">
          <div className="col chat-box ">
            <div className="d-flex gap-4 justify-content-center">
              <h5>Pasien aktif</h5>
              <h5>Berakhir</h5>
            </div>
            <div className="chat-box-container">
              <div className="chat-boxitems bg-primary rounded-4 p-3 mt-4">
                <div className="d-flex gap-3 justify-content-center align-items-center">
                  <img src={personChat} alt="" />
                  <div className="text-white">
                    <h5>Rojak</h5>
                    <span>Saya juga punya masalah hubungan... </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-lg-7 chat-content d-grid justify-content-center ">
            chatcontent
          </div>
        </div>

      </section>
    </Layouts>
  );
};

export default Chat;
