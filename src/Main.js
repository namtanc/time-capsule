import React from 'react';
import styled from 'styled-components';

import { WithFirebaseService } from './services/FirebaseService';
import MessageForm from './components/MessageForm/MessageForm';
import MessageList from './MessageList';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;
    
const Wrapper = styled.div`
    display: flex;
    width: 800px;
    height: 600px;
    margin: auto;
`;

const Main = (props) =>  {
    const renderLoading = () => <>It's happening!</>
    
    const renderFormAndBoard = () => (
        <>
            <MessageForm {...props} />
            <MessageList {...props} />
        </>
    );
    
    return (
        <Container>
            <Wrapper>
                {!props.messages ? renderLoading() : renderFormAndBoard() }
            </Wrapper>
        </Container>
    );
}

export default () => WithFirebaseService(Main);
