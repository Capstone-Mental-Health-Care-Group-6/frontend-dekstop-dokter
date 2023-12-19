import React, { useEffect, useState } from "react";
import "./ChatBot.css";
import DropdownNotif from "../../components/elements/DropdownNotification/DropdownNotif";
import { BsArrowLeft } from "react-icons/bs";
import {
  buttonChatBot1,
  dataNotification,
  buttonChatBot2,
} from "../../components/DataComponents/dataComponents";
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
import OpenAI from "openai";
import Aos from "aos";
import { ThreeDots } from "react-loader-spinner";
import { useLogin } from "../../hooks/useLogin";

const ChatBot = () => {
  useLogin();

  const [selectedPrompt, setSelectedPrompt] = useState(true);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hiddenButton, setHiddenButton] = useState("d-block");
  const [comand, setComand] = useState({
    message: "",
  });
  const [results, setResult] = useState([
    {
      role: "assistant",
      content:
        "Selamat datang di Aplikasi Kesehatan Mental kami! Saya akan dengan senang hati membantu Anda memahami fitur-fitur yang tersedia. Berikut beberapa hal yang dapat Anda lakukan: ",
    },
  ]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const handleChangeMessage = (e) => {
    const { name, value } = e.target;
    setComand({ ...comand, [name]: value });
  };

  const handleEmojiClick = (e) => {
    setComand((prevFormComand) => ({
      ...prevFormComand,
      message: prevFormComand.message + e.emoji,
    }));
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
    dangerouslyAllowBrowser: true,
  });

  const handleFinishChat = async (e, prompCustom) => {
    e.preventDefault();
    await handleSubmit(e, prompCustom);
  };

  const handlePromptClick = async (e, promptCustom) => {
    setSelectedPrompt(false);
    e.preventDefault();
    await handleSubmit(e, promptCustom);
  };

  const handleSubmit = async (e, promptCustom) => {
    e.preventDefault();
    setComand({ message: "" });
    setLoading(true);
    setSelectedPrompt(false);
    setHiddenButton("d-none");

    setResult([
      ...results,
      {
        role: "user",
        content: comand.message + (promptCustom ? promptCustom : ""),
      },
    ]);

    try {
      const res = await openai.chat.completions.create({
        messages: [
          ...results,
          {
            role: "assistant",
            content: `anda adalah asisten 
                    Rule Format Response :
                    1. anda adalah seorang pelayan di Emphaticare yang hanya menjawab pertanyaan seputar kesehatan mental berikan jawaban seperti apa yang di minta oleh user terkait kesehatan
                    2. jika user tiba tiba bertanya seperti Mengatasi Gangguan kecemasan, Mengatasi Stress, Mengatasi Depresi, Mengatasi kegilaan, langsung saja berikan penjelasan cara untuk mengatasi hal tersebut jangan anda tanya hal lain user nya
                    3. tolong setelah anda memberikan penjelasan, katakan Apakah masalah anda sudah terselesaikan?, di akhir kalimat
                    4. Jangan menjawab pertanyaan di luar kesehatan
                    5. Emphaticare Merupakan layanan kesehatan mental modern yang bisa di akses oleh semua orang dan memberikan service terbaik untuk siapapun
                    6. Website Ini bernama Emphaticare
                    7. jika ada pertanyaan yang di luar kesehatan tolong katakan maaf ini di luar percakapan 
                  `,
          },
          {
            role: "user",
            content: comand.message + (promptCustom ? promptCustom : ""),
          },
        ],
        model: "gpt-3.5-turbo",
      });

      const responseResult = res.choices[0].message.content;

      setResult((prevResults) => [
        ...prevResults,
        { role: "assistant", content: responseResult },
      ]);

      setLoading(false);
      setHiddenButton("d-block");
      if (promptCustom === "sudah" || promptCustom === "belum") {
        setHiddenButton("d-none");
      }
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
            {results.map((item, index) => (
              <div
                key={index}
                className={` ${
                  item.role === "user"
                    ? "d-flex justify-content-end "
                    : "d-flex justify-content-start"
                }`}
              >
                <p
                  className={` ${
                    item.role === "user" ? "user-question" : "answer-ai"
                  }`}
                  data-aos="fade-up"
                >
                  {item.content}
                </p>
              </div>
            ))}

            {loading && (
              <div>
                <ThreeDots
                  height="50"
                  width="50"
                  radius="9"
                  color="#707070"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              </div>
            )}

            <div
              className={`chat-text d-flex align-items-center m-0 p-0 flex-row gap-2 ${hiddenButton}`}
              data-aos="fade-up"
            >
              {selectedPrompt
                ? buttonChatBot1.map((item, index) => (
                    <Button
                      key={index}
                      onClick={(e) => handlePromptClick(e, item.content)}
                      text={item.text}
                      className={
                        "btn btn-outline-primary text-black fw-semibold rounded-5"
                      }
                    />
                  ))
                : buttonChatBot2.map((item, index) => (
                    <Button
                      key={index}
                      text={item.text}
                      className={
                        "btn btn-outline-primary text-black fw-semibold rounded-5"
                      }
                      onClick={(e) => handleFinishChat(e, item.content)}
                    />
                  ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
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
              type="button"
            >
              <img src={choiseChat} alt="" />
            </button>
            <Input
              placeholder={"Ketik pesan"}
              className={"shadow-none border-secondary-subtle"}
              name={"message"}
              onChange={handleChangeMessage}
              value={comand.message}
            />
            <button className="btn border-0" type="submit">
              <img src={sendChat} alt="icon-send-chtbot" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
