import React from 'react';
import { render } from 'react-dom';

import styled from 'styled-components';
import MessageForm from './MessageForm';
import Board from './Board';
import WithFirebaseService from './services/FirebaseService';
import WithThemeProvider from './services/ThemeProvider';

const Container = styled.div`
    display: flex;
    height: 100%;
    background-color: #fff;
    overflow-y: auto;
`;

const MainComponent = (props) => {
    return (
        <Container>
            <MessageForm {...props} /><br/><br/>
            <Board {...props} />
        </Container>
    );
}

const Main = WithThemeProvider(WithFirebaseService(MainComponent));

render(<Main />, document.getElementById('root'));