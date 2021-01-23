import React, { useState, useEffect } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { formatMessages } from '../Utils';
import { Message } from '../models/Message';

function WithFirebaseService(WrappedComponent) {
    const isFirebaseInitialized = () => firebase.apps?.length > 0;
    const [messages, setMessages] = useState(null);

    useEffect(async () => {
        if (!isFirebaseInitialized()) {
            await firebase.initializeApp(process.env.FIREBASE_CONFIG);
            const list = await fetchOpenedMessages();
            setMessages(formatMessages(list));
        }
    }, [firebase.apps]);

    const fetchMessages = () => {
        return firebase.firestore().collection('capsules').get()
            .then((users) => users.docs.map((u) => (u.data())))
    }

    const fetchOpenedMessages = () => {
        return firebase.firestore().collection('capsules')
            .where(Message.Field.targetedDate, '<', Date.now()).get()
            .then((users) => users.docs.map((u) => (u.data())))
    }
    
    const insertMessage = (message) => {
        firebase.firestore().collection('capsules').add(message);
    }

    return <WrappedComponent messages={messages} insertMessage={insertMessage} />
}

export { WithFirebaseService };