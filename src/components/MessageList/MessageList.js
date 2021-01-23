import React from 'react';

import { Container, Wrapper, RefreshButton } from './MessageList.styled';
import MessageItem from './MessageItem';

const MessageList = (props) => {
    if (!props || !props.messages || !props.refresh) return null;

    function renderMessageList() {
        return (props.messages || []).map((m, i) => MessageItem(m, i));
    };

    const renderBoard = () => {
        return (
            <Container>
                <RefreshButton onClick={props.refresh} />
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
