import React, { useState } from "react";
import "./ChatBot.css";
import DropdownNotif from "../../components/elements/DropdownNotification/DropdownNotif";
import { BsArrowLeft } from "react-icons/bs";
import { dataNotification } from "../../components/DataComponents/dataComponents";
import {
  choiseChat,
  iconNotifNavbar,
  iconProfileNavbar,
  sendChat,
} from "../../../image";
import { Link, NavLink } from "react-router-dom";
import Input from "../../components/elements/Input/Input";
import EmojiPicker from "emoji-picker-react";
import Button from "../../components/elements/Button/Button";

const ChatBot = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [formMessage, setFormMessage] = useState({
    message: "",
  });
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [dataChat, setDataChat] = useState([
    {
      sender: "bot",
      content:
        "Selamat datang di Aplikasi Kesehatan Mental kami! Saya akan dengan senang hati membantu Anda memahami fitur-fitur yang tersedia. Berikut beberapa hal yang dapat Anda lakukan: ",
    },
  ]);

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

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };




  return (
    <>
      <nav
        id="navbar"
        className="navbar navbar__chatbot bg-white d-flex align-items-center justify-content-end"
      >
        <div className="d-flex align-items-center gap-2 pe-4">
          <DropdownNotif
            imageSrc={iconNotifNavbar}
            dropdownContent={dataNotification.map((item) => item)}
          />
          <NavLink to={"/dokter-profile"}>
            <img
              src={iconProfileNavbar}
              alt="icon-profile"
              className="iconNavbar"
            />
          </NavLink>
        </div>
      </nav>

      <div className="d-flex header__chatbot align-items-center justify-content-between">
        <Link to={"/dokter/dashboard"} className="text-black">
          <BsArrowLeft size={30} />
        </Link>

        <h6>Chat Bot</h6>
        <span></span>
      </div>

      <div className="body__chatbot d-flex justify-content-center my-5">
        <div className="wrapper__chatbot d-flex flex-column justify-content-between">
          <div className="chat__bot">
            {dataChat.map((chat, index) => (
              <div
                key={index}
                className={`chat-text d-grid align-items-center ${chat.sender === "bot" ? "chat-text-bot" : "chat-text-dokter"
                  }`}
              >
                <span>{chat.content}</span>

              </div>
            ))}

            <div className="chat-text d-flex align-items-center flex-row gap-3">
              {selectedPrompt ? (
                <>
                  <Button
                    text={"Sudah"}
                    className={
                      "btn btn-outline-primary text-black fw-semibold rounded-5"
                    }
                    onClick={() => handleFinishChat("sudah")}
                  />

                  <Button
                    text={"Belum"}
                    className={
                      "btn btn-outline-primary text-black fw-semibold rounded-5"
                    }
                    onClick={() => handleFinishChat("belum")}
                  />
                </>
              ) : (
                <>
                  <Button
                    text={"Mengatasi Gangguan Kecemasan"}
                    className={
                      "btn btn-outline-primary text-black fw-semibold rounded-5"
                    }
                  />

                  <Button
                    onClick={() => handlePromptClick("mengatasi stress")}
                    text={"Mengatasi Stress"}
                    className={
                      "btn btn-outline-primary text-black fw-semibold rounded-5"
                    }
                  />

                  <Button
                    text={"Mengatasi Depresi"}
                    className={
                      "btn btn-outline-primary text-black fw-semibold rounded-5"
                    }
                  />

                  <Button
                    text={"Mengatasi Kegilaan"}
                    className={
                      "btn btn-outline-primary text-black fw-semibold rounded-5"
                    }
                    onClick={() => handlePromptClick("mengatasi kegilaan")}
                  />
                </>
              )}
            </div>
          </div>

          <form
            action="#"
            className="input__chatbot bg-white d-flex py-2"
          >
            {showEmojiPicker && (
              <div className="emoji-picker bottom-0 left-0 w-50 container position-absolute z-3 ">
                <EmojiPicker
                  width={"100%"}
                  height={"50vh"}
                  onEmojiClick={handleEmojiClick}
                />
              </div>
            )}
            <button
              className="btn dropdown-toggle border-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={toggleEmojiPicker}
            >
              <img src={choiseChat} alt="" />
            </button>
            <Input
              placeholder={"Ketik Pesan"}
              className={"shadow-none border-secondary-subtle"}
              name={"message"}
              onChange={handleChangeMessage}
              value={formMessage.message}
            />
            <button className="btn border-0">
              <img src={sendChat} alt="icon-send-chtbot" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
