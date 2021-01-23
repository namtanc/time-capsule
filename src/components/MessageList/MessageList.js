import React from 'react';

import { Container, Wrapper } from './MessageList.styled';
import Message from './Message';

const MessageList = (props) => {
    if (!props || !props.messages) return null;

    function renderMessageList() {
        return (props.messages || []).map((m, i) => Message(m, i));
    };

    const renderBoard = () => {
        return (
            <Container>
                <Wrapper>
                    {renderMessageList()}
                </Wrapper>
            </Container>
        );
    };

    return renderBoard();
};

MessageList.displayName = 'MessageList';
export default MessageList;
