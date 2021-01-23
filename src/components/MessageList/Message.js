import React from 'react';

import { Container, Wrapper, Name, Content } from './Message.styled';

const Message = (message, key) => message ?
    (
        <Container key={key}>
            <Wrapper>
                <Name>{message['name']}</Name>
                <Content>{message['email']}</Content>
            </Wrapper>
        </Container>
    ): null;

Message.displayName = 'Message';
export default Message;
