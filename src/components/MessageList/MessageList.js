import React from 'react';

import { Container, Wrapper, RefreshButton } from './MessageList.styled';
import Message from './Message';

const MessageList = (props) => {
    if (!props || !props.messages || !props.refresh) return null;

    function renderMessageList() {
        return (props.messages || []).map((m, i) => Message(m, i));
    };

    const renderBoard = () => {
        return (
            <Container>
                <Wrapper>
                    <RefreshButton onClick={props.refresh} />
                    {renderMessageList()}
                </Wrapper>
            </Container>
        );
    };

    return renderBoard();
};

MessageList.displayName = 'MessageList';
export default MessageList;
