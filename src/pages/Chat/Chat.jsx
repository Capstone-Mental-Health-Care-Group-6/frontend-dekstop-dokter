import React, { useEffect, useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import "./Chat.css";
import { choiseChat, personChat, sendChat } from "../../../image";
import { NavLink, useParams } from "react-router-dom";
import { dataChatUser } from "../../components/DataComponents/DataComponents";
import ChatBoxList from "../../components/fragments/ChatBoxList/ChatBoxList";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { dataChat } from "../../components/DataComponents/DataComponents";
const Chat = () => {
  const { id } = useParams();
  const [conversation, setConversation] = useState(null);

  const handleChatClick = async () => {
    try {
      // Mendapatkan data percakapan berdasarkan id
      // const conversationData = await getConversationById(id);
      // setConversation(conversationData);

      setConversation(id)
    } catch (error) {
      console.error('Error fetching conversation:', error);
    }
  };

  console.log(id);

  useEffect(() => {
    handleChatClick();
  }, [id]);

  return (
    <Layouts>
      <section className="chat-page" id="chat-page">
        <div className="row d-flex justify-content-between gap-2">
          <div className="col chat-box ">
            <div className="d-flex justify-content-between filtering-session-chat">
              <h5>Pasien aktif</h5>
              <h5>Berakhir</h5>
            </div>
            <ul className="chat-box-container mt-5">
              {dataChatUser.map((item, index) => (
                <ChatBoxList key={index} image={item.image} name={item.name} text={item.text} id={item.id} />
              ))}
            </ul>
          </div>

          <div className="col col-lg-7 chat-content  d-flex flex-column justify-content-between">


            <div className="profile-and-status">
              <div className="d-flex justify-content-between bg-primary w-100 align-items-center p-3">
                <div className="d-flex gap-3 justify-content-start align-items-center ">
                  <img src={personChat} alt="" />
                  <div className="text-profile">
                    <h5 className="text-white fw-semibold">Rojak</h5>
                    <div className="d-flex align-items-center">
                      <span >online </span>
                      <BsDot className="text-white" />
                      <span className="text-light" >Susah Tidur</span>
                    </div>
                  </div>
                </div>
                <div class="btn-group">
                  <button className="btn dropdown-toggle border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                    <BsThreeDots />
                  </button>
                  <ul class="dropdown-menu bg-dark">
                    <li><button className="text-white btn bg-none border-0">Akhiri Chat</button></li>
                    <li><button className="text-white btn bg-none border-0">Hapus Chat</button></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="chat-text px-2">
              {dataChat.map((chat, index) => (
                <div
                  key={index}
                  className={`chat-text d-grid align-items-center ${chat.sender === 'dokter' ? 'chat-text-dokter' : 'chat-text-user'}`}
                >
                  <span>{chat.content}</span>
                </div>
              ))}
            </div>


            <div className="input-chat mb-3 d-flex ">
              <button className="btn" ><img src={choiseChat} alt="" /></button>
              <input type="text" class="form-control shadow-none" placeholder="Ketik Pesan" aria-label="Username" aria-describedby="basic-addon1" />
              <button className="btn" ><img src={sendChat} alt="" /></button>
            </div>

          </div>
        </div>


      </section>
    </Layouts>
  );
};

export default Chat;
