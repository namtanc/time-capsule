import React, { Component } from 'react';

import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';

export default function WithFirebaseService(WrappedComponent) {
    const isAppExist = !firebase.app.length;

    return class FirebaseService extends Component {        
        initialize() {
            if (!isAppExist) {
                firebase.initializeApp(process.env.FIREBASE_CONFIG);
            }
        }
        
        insertMessage = (message, name, email) => {
            !isAppExist && firebase.firestore().collection('capsules').add({ message, name, email });
        }
        
        fetchMessages() {
            firebase.firestore().collection('capsules').get().then((users) => users.docs.map((u) => (u.data())));
        }

        render() {
            this.initialize();
            return <WrappedComponent loading={isAppExist} fetchMessages={this.fetchMessages} insertMessage={this.insertMessage} />;
        }
    };
}
    

