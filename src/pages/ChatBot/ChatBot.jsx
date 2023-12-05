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
import OpenAI from 'openai';
import Label from "../../components/elements/Input/Label";

const ChatBot = () => {
  const [selectedPrompt, setSelectedPrompt] = useState(true);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [loading, setLoading] = useState(false)
  const [hiddenButton, setHiddenButton] = useState('d-block')
  const [comand, setComand] = useState({
    message: "",
  });

  const [results, setResult] = useState([{
    role: "assistant",
    content:
      "Selamat datang di Aplikasi Kesehatan Mental kami! Saya akan dengan senang hati membantu Anda memahami fitur-fitur yang tersedia. Berikut beberapa hal yang dapat Anda lakukan: ",
  }]);



  const handleChangeMessage = (e) => {
    const { name, value } = e.target
    setComand({ ...comand, [name]: value })
  }

  const handleEmojiClick = (e) => {
    setComand((prevFormComand) => ({
      ...prevFormComand, message: prevFormComand.message + e.emoji,
    }));
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
    dangerouslyAllowBrowser: true
  });

  const handleFinishChat = async (e, prompCustom) => {
    setSelectedPrompt(false)
    e.preventDefault();
    await handleSubmit(e, prompCustom);
    setHiddenButton('d-none')
  }

  const handlePromptClick = async (e, promptCustom) => {
    setSelectedPrompt(false)
    e.preventDefault();
    await handleSubmit(e, promptCustom);
  };

  const handleSubmit = async (e, promptCustom) => {
    e.preventDefault();
    setComand({ message: '' });
    setLoading(true);

    try {
      const res = await openai.chat.completions.create({
        messages: [
          ...results,
          {
            role: "assistant",
            content: `anda adalah asisten 
                    Rule Format Response :
                    1. anda adalah seorang pelayan yang hanya menjawab pertanyaan seputar perograming
                    2. Jangan menjawab pertanyaan di luar programing dan di luar CSA Learning
                    3. CSA Learning Merupakan e-learning yang bisa di akses oleh semua orang dan memberikan pembelajaran yang terbaru berbentuk vidio
                    4. Website Ini bernama CSA Learning
                    5. jika ada pertanyaan yang di luar programing dan di luar CSA Learning tolong katakan maaf ini di luar percakapan 
                    6. jika user meminta materi apa saja yang ada sekarang dalam CSA learning berikan data ini `,
          },
          {
            role: "user",
            content: comand.message,
          }
        ],
        model: "gpt-3.5-turbo",
      });

      const responseResult = res.choices[0].message.content;

      setResult([
        ...results,
        { role: "user", content: comand.message + (promptCustom ? promptCustom : '') },
        { role: "assistant", content: responseResult }

      ]);
      setLoading(false);
    } catch (error) {
      console.error("Error sending message to OpenAI:", error);
      setLoading(false);
    }


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
          <div className="chat__bot p-3">
            {
              results.map((item, index) => (
                <div key={index} className={` ${item.role === 'user' ? 'text-end userQuestion' : 'answerAI'}`} >
                  <p> {item.content}</p>
                </div>
              ))
            }

            <div className={`chat-text d-flex align-items-center flex-row gap-2 ${hiddenButton}`} >
              {selectedPrompt ? (
                <>
                  <Button
                    onClick={(e) => handlePromptClick(e, "Mengatasi Gangguan Kecemasan")}
                    text={"Mengatasi Gangguan Kecemasan"}
                    className={
                      "btn btn-outline-primary text-black fw-semibold rounded-5"
                    }
                  />

                  <Button
                    onClick={(e) => handlePromptClick(e, "mengatasi stress")}
                    text={"Mengatasi Stress"}
                    className={
                      "btn btn-outline-primary text-black fw-semibold rounded-5"
                    }
                  />

                  <Button
                    onClick={(e) => handlePromptClick(e, "mengatasi kegilaan")}
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
                    onClick={(e) => handlePromptClick(e, "mengatasi kegilaan")}
                  />
                </>
              ) : (
                <>
                  <Button
                    text={"Sudah"}
                    className={
                      "btn btn-outline-primary text-black fw-semibold rounded-5"
                    }
                    onClick={(e) => handleFinishChat(e, "sudah")}
                  />

                  <Button
                    text={"Belum"}
                    className={
                      "btn btn-outline-primary text-black fw-semibold rounded-5"
                    }
                    onClick={(e) => handleFinishChat(e, "belum")}
                  />
                </>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit}
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
            <Input placeholder={'Ketik pesan'} className={'shadow-none border-secondary-subtle'} name={'message'} onChange={handleChangeMessage} value={comand.message} />
            <button className="btn border-0" >
              <img src={sendChat} alt="icon-send-chtbot" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
