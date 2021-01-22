import React, { useState, useEffect, Component } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import MessageForm from './MessageForm';
import Board from './Board';

const Container = styled.div`
    display: flex;
    height: 100%;
    background-color: #fff;
    overflow-y: auto;
`;

function WithFirebaseService(WrappedComponent) {
    const isFirebaseInitialized = () => firebase.apps?.length > 0;
    const [messages, setMessages] = useState(null);

    useEffect(async () => {
        if (!isFirebaseInitialized()) {
            await firebase.initializeApp(process.env.FIREBASE_CONFIG);
            const list = await fetchMessages();
            setMessages(list);
        }
    }, [firebase.apps]);

    const fetchMessages = () => {
        return firebase.firestore().collection('capsules').get()
            .then((users) => users.docs.map((u) => (u.data())))
    }
    
    const insertMessage = (message) => {
        firebase.firestore().collection('capsules').add(message);
    }

    return <WrappedComponent messages={messages} insertMessage={insertMessage} />
}

class MainComponent extends Component {
    constructor(props) {
        super(props);
    }

    renderLoading = () => <div>Loading...</div>
    
    renderFormAndBoard = () => (
        <>
            <MessageForm {...this.props} />
            <Board {...this.props} />
        </>
    );
    
    render() {
        return (
            <Container>
                {!this.props.messages ? this.renderLoading() : this.renderFormAndBoard() }
            </Container>
        );
    }
    
}

export default () => WithFirebaseService(MainComponent);
