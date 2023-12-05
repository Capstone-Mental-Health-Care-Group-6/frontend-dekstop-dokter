import React from 'react'
import { NavLink } from 'react-router-dom'

function ChatBoxList({ id, image, name, text }) {
    return (
        <NavLink className='chat-link' to={`/dokter/chat/${id} `}>
            <li className="chat-box-list rounded-4 p-3 mt-4">
                <div className="d-flex flex-lg-row flex-column gap-3 justify-content-start align-items-center">
                    <img src={image} alt="" />
                    <div className="text-chat text-lg-start text-sm-center text-center">
                        <h5 className='fw-semibold' >{name}</h5>
                        <span>{text} </span>
                    </div>
                </div>
            </li>
        </NavLink>

    )
}

export default ChatBoxList