import React from 'react';
import styled from 'styled-components';

import { WithFirebaseService } from './services/FirebaseService';
import MessageForm from './components/MessageForm/MessageForm';
import MessageList from './components/MessageList/MessageList';
import GlobalStyle, { Div } from './components/common/Base';
import { fontSize } from './components/common/Font';

const Container = styled(Div)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;
    
const Wrapper = styled(Div)`
    display: flex;
    width: 800px;
    height: 600px;
    margin: auto;
`;

const Loading = styled(Wrapper)`
    color: blue;
    ${fontSize.L}
`;

const Main = (props) =>  {
    const renderLoading = () => <Loading>It's happening!</Loading>
    
    const renderFormAndBoard = () => (
        <Wrapper>
            <MessageForm {...props} />
            <MessageList {...props} />
        </Wrapper>
    );
    
    return (
        <Container>
            <GlobalStyle />
            {!props.messages ? renderLoading() : renderFormAndBoard() }
        </Container>
    );
}

Main.displayName = 'TimeCapsule';
Container.displayName = 'Container';
Wrapper.displayName = 'Wrapper';
export default () => WithFirebaseService(Main);
