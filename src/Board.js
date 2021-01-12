import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-grow: 2;
    flex-basis: 0;
    margin: 36px 24px 36px 24px;
`;
const MessageList = styled.ul`
    width: 100%;
    list-style: none;
    border: 1px solid #f7f9fb;
    border-radius: 16px;
`;

const MessageContainer = styled.li`
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 3px 4px 9px #ededed;
    margin: 12px;
`;
const MessageWrapper = styled.div`
    margin-bottom: 16px;
`;
const Name = styled.span`
`;
const Content = styled.span`
`;

const BoardComponent = (props) => {
    if (!props || !props.messages) return null;

    const renderMessage = (message, i) => {
        return (
            <MessageContainer>
                <MessageWrapper>
                    <Name>{message['name']}</Name>
                    <Content>{message['name']}</Content>
                </MessageWrapper>
            </MessageContainer>
        );
    };

    function renderMessageList() {
        return (props.messages || []).map((m, i) => renderMessage(m, i));
    };

    const renderBoard = () => {
        return (
            <Container>
                <MessageList>
                    {renderMessageList()}
                </MessageList>
            </Container>
        );
    };

    return renderBoard();
};

export default BoardComponent;
