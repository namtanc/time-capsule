import React, { useState, useEffect } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { formatMessages } from '../Utils';
import { Message } from '../models/Message';
import { validateMessage } from './Validator';

export const WithFirebaseService = (WrappedComponent) => {
    const isFirebaseInitialized = () => firebase.apps?.length > 0;
    const [messages, setMessages] = useState(null);
    const [errorsList, setErrorsList] = useState([]);

    useEffect(async () => {
        if (!isFirebaseInitialized()) {
            await firebase.initializeApp(process.env.FIREBASE_CONFIG);
            const list = await fetchOpenedMessages();
            setMessages(formatMessages(list));
        }
    }, [firebase.apps]);

    const fetchOpenedMessages = () => {
        return firebase.firestore().collection('capsules')
            .where(Message.Field.targetedDate, '<', Date.now()).get()
            .then((users) => users.docs.map((u) => (u.data())))
    }
    
    const insertMessage = (message) => {
        const { isValid, errors } = validateMessage(message);
        setErrorsList(errors);

        // if (isValid) {
        //     firebase.firestore().collection('capsules').add(message);
        //     fetchOpenedMessages();
        // }
    }

    return <WrappedComponent messages={messages} errorsList={errorsList} insertMessage={insertMessage} refresh={fetchOpenedMessages} />
}
