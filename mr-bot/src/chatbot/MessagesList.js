import styled from "styled-components"


const Container = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
`
const MessageWrapBase = styled.div`
    flex-direction: column;
    display: flex;
    padding: 8px;
`

const UserMessageWrap = styled(MessageWrapBase)`
    align-items: flex-end;
`

const NonUserMessageWrap = styled(MessageWrapBase)`
    align-items: flex-start; 
`

const MessageBase = styled.span`
    padding: 8px; 
    border-radius: 8px;
    max-width: 75%;
`

const UserMessage = styled(MessageBase)`
    background-color: #333;
    color: white
`

const NonUserMessage = styled(MessageBase)`
    background-color: #aaa;
    color: white;
`



const MessagesList = ({messages}) => {
    return (
        <Container>
            {messages.map(message => {
                if(message.isUser) {
                    return (
                        <UserMessageWrap>
                            <UserMessage>
                                {message.text}
                            </UserMessage>
                        </UserMessageWrap>
                    )
                }

                return (
                    <NonUserMessageWrap>
                        {message.text}
                    </NonUserMessageWrap>
                )
            })}
        </Container>
    )
}

export default MessagesList