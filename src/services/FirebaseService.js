import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export default function WithFirebaseService(WrappedComponent) {
    const isAppExist = !firebase.app.length;
    
    return class FirebaseService extends Component {
        constructor() {
            super();
            this.state = {
                messages: null
            }
        }

        componentDidUpdate() {
            if (isAppExist && !this.state.messages) {
                this.fetchMessages();
            }
        }

        initialize() {
            if (!isAppExist) {
                firebase.initializeApp(process.env.FIREBASE_CONFIG);
            }
            else {
                console.log('fetching..')
                this.fetchMessages();
            }
        }
        
        insertMessage = (message) => {
            !isAppExist && firebase.firestore().collection('capsules').add(message);
        }
        
        fetchMessages() {
            console.log('fetching..')
            firebase.firestore().collection('capsules').get()
                .then((users) => this.setState({ messages: users.docs.map((u) => (u.data())) }))
        }

        render() {
            this.initialize();
            return <WrappedComponent messages={this.state.messages} insertMessage={this.insertMessage} />;
        }
    };
}
    

