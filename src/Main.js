import React from 'react';

import { WithFirebaseService } from './services/FirebaseService';
import MessageForm from './components/MessageForm/MessageForm';
import MessageList from './components/MessageList/MessageList';
import GlobalStyle from './components/common/Base';
import { Container, Loading, RefreshButton, Wrapper } from './Main.styled';

const Main = (props) =>  {
    const renderLoading = () => <Loading>It's happening!</Loading>
    
    const renderFormAndBoard = () => (
        <>
            {/* <RefreshButton onClick={props.refresh} /> */}
            <Wrapper>
                <MessageForm {...props} />
                <MessageList {...props} />
            </Wrapper>
        </>
    );
    
    return (
        <Container>
            <GlobalStyle />
            {!props.messages ? renderLoading() : renderFormAndBoard() }
        </Container>
    );
}

Main.displayName = 'TimeCapsule';
export default () => WithFirebaseService(Main);
