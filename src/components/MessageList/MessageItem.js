import React from 'react';

import { MessageItemContainer, Content, Date, Email, Name, Wrapper } from './MessageItem.styled';
import { Message } from '../../models/Message';
import { formatDateString } from '../../Utils';

const MessageItem = (message, key) => message ? (
    <MessageItemContainer key={key}>
        <Wrapper>
            <Name>{message[Message.Field.name]}</Name>
            <Email>{message[Message.Field.email]}</Email>
            <Content>{message[Message.Field.message]}</Content>
            <Date>{formatDateString(message[Message.Field.targetedDate])}</Date>
        </Wrapper>
    </MessageItemContainer>
) : null;

MessageItem.displayName = 'Message';
export default MessageItem;
