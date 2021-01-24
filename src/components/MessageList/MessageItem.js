import React from 'react';

import { MessageItemContainer, Content, Date, Name, Wrapper } from './MessageItem.styled';
import { Message } from '../../models/Message';
import { formatDateString } from '../../Utils';

const shadowColors = ['blue', 'red', 'yellow', 'green'];
const getShadowColor = (index) => shadowColors[(index + 1) % 4];

const MessageItem = (message, key) => message ? (
    <MessageItemContainer key={key} className={getShadowColor(key)}>
        <Wrapper>
            <Name>{message[Message.Field.name]}</Name>
            <Content>{message[Message.Field.message]}</Content>
            <Date>{formatDateString(message[Message.Field.targetedDate])}</Date>
        </Wrapper>
    </MessageItemContainer>
) : null;

MessageItem.displayName = 'Message';
export default MessageItem;