import React, { useEffect, useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import "./Chat.css";
import { personChat } from "../../../image";
import { NavLink, useParams } from "react-router-dom";
import { dataChatUser } from "../../components/DataComponents/DataComponents";
import ChatBoxList from "../../components/fragments/ChatBoxList/ChatBoxList";
const Chat = () => {
  const { id } = useParams();
  const [conversation, setConversation] = useState(null);

  const handleChatClick = async () => {
    try {
      // Mendapatkan data percakapan berdasarkan id
      // const conversationData = await getConversationById(id);
      // setConversation(conversationData);

      setConversation(userId)
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

          <div className="col col-lg-7 chat-content d-grid  ">
            <p> user {id}</p>
          </div>
        </div>

      </section>
    </Layouts>
  );
};

export default Chat;
