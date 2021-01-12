import React, { useState } from 'react';
import WithFirebaseService from './services/FirebaseService';

const MessageFormComponent = (props) => {
    const classname = 'MessageForm';
    const [content, setContent] = useState('message');
    const [name, setName] = useState('name');
    const [email, setEmail] = useState('email@mail.com');
    
    const onSubmit = () => { 
        props.insertMessage(content, name, email);
    }

    const handleChange = (onchange) => (e) => {
        onchange(e.target?.value);
    }

    const renderItem = (id, type, title, placeholder, value, onChange) => {
        const inputProps = { id, type, placeholder, value, onChange: handleChange(onChange) };
        return (
            <>
                <span className={`${classname}__Label`}>{title}</span><br/>
                <input className={`${classname}__Input`} {...inputProps} /><br/>
            </>
        );
    }

    const renderForm = () => {
        return (
            <div className={classname}>
                {renderItem('content', 'text', 'Message', 'write something', content, setContent)}
                {renderItem('name', 'text', 'Name', 'name', name, setName)}
                {renderItem('email', 'text', 'Email', 'email', email, setEmail)}
                <button onClick={onSubmit}>Add message</button>
            </div>
        )
    }

    return renderForm();
}

export const MessageForm = WithFirebaseService(MessageFormComponent);
