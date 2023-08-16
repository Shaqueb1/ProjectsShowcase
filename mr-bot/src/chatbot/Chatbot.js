import React, { useState } from "react"
import styled from "styled-components"

import fakeMessages from "./fakeMessages"
import FloatingButton from "./FloatingButton"
import MessagesList from "./MessagesList"
import NewMessageForm from "./NewMessageForm"

const FloatingContainer = styled.div`
    position: fixed;
    bottom: 32px;
    right: 32px;
`
const FloatingWindow = styled.div`
    position: absolute;
    right: 0;
    bottom: 80px;

    background-color: white;
    color: black; 
    border-radius: 8px;
    box-shadow: 0px 5px 15px black;
    width: 350px;
    height: 600px;
    flex-direction: column;
    z-index: 2; 
    padding: 8px; 
`

    const MessagesSection = styled.div`
        overflow: auto;
        padding: 8px; 
        flex: 1;
    `

const Chatbot = () => {
    const [message, setMessage] = useState(fakeMessages)
    const [windowIsOpen, setWindowIsOpen] = useState(false)

    const unreadMessages = message.filter(m => m.isUnread)

    return (
        <FloatingContainer>
            {windowIsOpen && (
                <FloatingWindow>
                    <MessagesSection>

                    <MessagesList message={message}/>
                    </MessagesSection>
                    
                    <NewMessageForm />
                </FloatingWindow>
            )}
            <FloatingButton onClick={() => setWindowIsOpen(!windowIsOpen)}
            unreadCount = {unreadMessages.length}
            />
        </FloatingContainer>
    )
}

export default Chatbot