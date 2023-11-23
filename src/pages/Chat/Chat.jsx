import React, { useEffect, useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import "./Chat.css";
import { personChat } from "../../../image";
import { NavLink, useParams } from "react-router-dom";
import { dataChatUser } from "../../components/DataComponents/DataComponents";
import ChatBoxList from "../../components/fragments/ChatBoxList/ChatBoxList";
const Chat = () => {
  const { userId } = useParams();
  const [conversation, setConversation] = useState(null);

  const handleChatClick = async () => {
    try {
      // Mendapatkan data percakapan berdasarkan userId
      // const conversationData = await getConversationById(userId);
      // setConversation(conversationData);

      setConversation(userId)
    } catch (error) {
      console.error('Error fetching conversation:', error);
    }
  };


  useEffect(() => {
    handleChatClick();
  }, [userId]);

  return (
    <Layouts>
      <section className="chat-page" id="chat-page">
        <div className="row d-flex justify-content-between gap-2">
          <div className="col chat-box ">
            <div className="d-flex gap-4 justify-content-center">
              <h5>Pasien aktif</h5>
              <h5>Berakhir</h5>
            </div>
            <ul className="chat-box-container mt-5">
              {dataChatUser.map((item, index) => (
                <ChatBoxList key={index} image={item.image} name={item.name} text={item.text} id={item.id} />
              ))}
            </ul>
          </div>

          <div className="col col-lg-7 chat-content d-grid justify-content-center ">
            {conversation && (
              <div>
                <h5>{conversation.user}</h5>
                <ul>
                  {conversation.messages.map((message, index) => (
                    <li key={index}>{message}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

      </section>
    </Layouts>
  );
};

export default Chat;
