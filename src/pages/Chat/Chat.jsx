import React, { useEffect, useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import "./Chat.css";
import {
  choiseChat,
  logoZoom,
  personChat,
  sendChat,
  empetyChat,
} from "../../../image";
import { useParams } from "react-router-dom";
import { dataChatUser } from "../../components/DataComponents/dataComponents";
import ChatBoxList from "../../components/fragments/ChatBoxList/ChatBoxList";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { dataChat } from "../../components/DataComponents/dataComponents";
import EmojiPicker from "emoji-picker-react";
import Input from "../../components/elements/Input/Input";
import { getIdDoctor } from "../../service/authentication";
import { useLogin } from "../../hooks/useLogin";


const Chat = () => {
  useLogin();
  // logic di sintak ini tidak 100% final ini hanya perkiraan, untuk mengambil data nya nanti lewat object keys
  // dari use params nya

  const { id } = useParams();
  const [conversation, setConversation] = useState(null);
  const [bgTransaction, setBgTransaction] = useState("aktif");
  const [pasienActive, setPasienActive] = useState(true);
  const [pasienEnd, setPasienEnd] = useState(false);
  const [inputChat, setInputChat] = useState(false);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [formMessage, setFormMessage] = useState({
    message: "",
  });

  const filteredZoom = dataChatUser.map((item) => item.session);
  // console.log(filteredZoom);
  useEffect(() => {
    if (pasienActive) {
      const filteredData = dataChatUser.filter(
        (customer) => customer.status === "aktif"
      );
      setFilteredCustomers(filteredData);
      setInputChat(true);
    } else if (pasienEnd) {
      const filteredData = dataChatUser.filter(
        (customer) => customer.status === "berakhir"
      );
      setFilteredCustomers(filteredData);
      setInputChat(false);
    } else if (filteredZoom) {
      if (filteredZoom === "zoom") {
        setZoom(true);
      } else {
        setZoom(false);
      }
    } else {
      setFilteredCustomers(dataChatUser);
    }
  }, [pasienActive, pasienEnd, dataChatUser]);

  const handleChatClick = async () => {
    try {
      // Mendapatkan data percakapan berdasarkan id
      // const conversationData = await getConversationById(id);
      // setConversation(conversationData);

      setConversation(id);
    } catch (error) {
      console.error("Error fetching conversation:", error);
    }
  };

  // console.log(id);

  useEffect(() => {
    handleChatClick();
  }, [id]);

  const handleClick = (idBackground) => {
    setBgTransaction(idBackground);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleChangeMessage = (e) => {
    const { name, value } = e.target;
    setFormMessage({ ...formMessage, [name]: value });
  };

  const handleEmojiClick = (e) => {
    setFormMessage((prevFormMessage) => ({
      ...prevFormMessage,
      message: prevFormMessage.message + e.emoji,
    }));
  };

  console.log(formMessage.message);

  // mengambil id dokter dari jwt decode
  const [idDoctor, setIdDoctor] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedIdDoctor = getIdDoctor(token);
      setIdDoctor(decodedIdDoctor);
    }
  }, []);
  console.log('ini adalah id dokter', idDoctor);


  // const [messages, setMessages] = useState([]);
  // const [messagesInput, setMessagesInput] = useState('');
  // const socket = new WebSocket(`ws://kmb5alta.online/api/socket/doctor/${idDoctor}`);

  // useEffect(() => {

  //   socket.onopen = () => {
  //     console.log('WebSocket connection established');
  //   };
  //   // socket.onmessage = (event) => {
  //   //   const receivedMessage = JSON.parse(event.data);
  //   //   setMessages([...messages, receivedMessage]);
  //   // };

  //   // socket.onclose = (event) => {
  //   //   console.log('Koneksi ditutup:', event);
  //   // };

  //   // Membersihkan koneksi saat komponen dibongkar
  //   return () => {
  //     // Close the socket only if it is open
  //     if (socket.readyState === WebSocket.OPEN) {
  //       socket.close();
  //     }
  //   };
  // }, [messages]);

  const sendMessage = () => {
    if (messagesInput.trim() !== '') {
      const message = {
        text: messagesInput,
        timeStrap: new Date().toISOString()
      }
      socket.send(JSON.stringify(message));
      setMessagesInput('');
    }

  }



  return (
    <Layouts>
      {dataChatUser.length < 1 ? (
        <>
          <div
            className="empety-chat d-flex flex-column justify-content-center align-items-center"
            id="empety-chat"
          >
            <img src={empetyChat} alt="" />
            <p className="fw-medium text-center">
              Belum ada chat disini, silahkan buka praktik dan mari mulai
              berkonsultasi bersama pasien anda{" "}
            </p>
          </div>
        </>
      ) : (
        <section className="chat-page" id="chat-page">
          <div className="row d-flex justify-content-between">
            <div className="col col-lg-5 col-sm-4 ">
              <div className="chat-box">
                <div className="d-flex justify-content-between filtering-session-chat">
                  <h5
                    className={`px-2 ${bgTransaction === "aktif" ? "active" : ""
                      }`}
                    onClick={() => {
                      setPasienActive(true);
                      setPasienEnd(false);
                      handleClick("aktif");
                    }}
                  >
                    Pasien aktif
                  </h5>

                  <h5
                    className={bgTransaction === "berakhir" ? "active" : ""}
                    onClick={() => {
                      setPasienEnd(true);
                      setPasienActive(false);
                      handleClick("berakhir");
                    }}
                  >
                    Berakhir
                  </h5>
                </div>
                <ul className="chat-box-container mt-5">
                  {filteredCustomers.map((item, index) => (
                    <ChatBoxList
                      key={index}
                      image={item.image}
                      name={item.name}
                      text={item.text}
                      id={item.id}
                    />
                  ))}
                </ul>
              </div>
            </div>

            <div className="col col-lg-7 col-sm-8">
              <div className="chat-content  d-flex flex-column justify-content-between">
                <div className="profile-and-status">
                  <div className="d-flex justify-content-between bg-primary  align-items-center p-lg-3 py-3 p-1">
                    <div className="d-flex gap-3 justify-content-start align-items-center ">
                      <img src={personChat} alt="" />
                      <div className="text-profile">
                        <h5 className="text-white fw-semibold">Rojak</h5>
                        <div className="d-flex align-items-center">
                          <span>online </span>
                          <BsDot className="text-white" />
                          <span className="text-light">Susah Tidur</span>
                        </div>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button
                        className="btn dropdown-toggle border-0"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <BsThreeDots />
                      </button>
                      <ul className="dropdown-menu bg-dark">
                        <li>
                          <button className="text-white btn bg-none border-0">
                            Akhiri Chat
                          </button>
                        </li>
                        <li>
                          <button className="text-white btn bg-none border-0">
                            Hapus Chat
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-center m-0 p-0 fw-semibold text-success">
                  sesi 1
                </p>
                <hr className="m-0" />
                <div className="chat-text px-2 ">
                  {dataChat.map((chat, index) => (
                    <div
                      key={index}
                      className={`chat-text d-grid align-items-center ${chat.sender === "dokter"
                        ? "chat-text-dokter"
                        : "chat-text-user"
                        }`}
                    >
                      <span>{chat.content}</span>
                    </div>
                  ))}
                </div>

                {inputChat ? (
                  <form className="input-chat d-flex ">
                    {showEmojiPicker && (
                      <div className="emoji-picker container position-absolute z-3 ">
                        <EmojiPicker
                          width={"100%"}
                          height={"50vh"}
                          onEmojiClick={handleEmojiClick}
                        />
                      </div>
                    )}
                    <button className="btn dropdown-toggle border-0" data-bs-toggle="dropdown" aria-expanded="false" onClick={toggleEmojiPicker} type="button" >
                      <img src={choiseChat} alt="" />
                    </button>
                    <Input placeholder={'Ketik pesan'} className={'shadow-none border-secondary-subtle'} name={'message'} onChange={handleChangeMessage} value={formMessage.message} />
                    <button className="btn border-0" type="submit">
                      <img src={sendChat} alt="" />
                    </button>
                  </form>
                ) : (
                  <div className="input-chat-end d-flex justify-content-center">
                    <h6 className="fw-semibold">
                      Sesi Konsultasi Telah Berakhir
                    </h6>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </Layouts>
  );
};

export default Chat;
