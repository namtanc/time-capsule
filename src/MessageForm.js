import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: center;
    align-items: center;
`;

const FormWrapper = styled.ul`
    list-style: none;
    width: 100%;
    margin: 48px;
    padding: 32px;
    border-radius: 24px;
    background-color: #f7f9fb;
`;

const FormItemInput = styled.li`
    display: flex;
    margin-bottom: 8px;
`;
const FormItemArea = styled.li`
    display: flex;
    flex-direction: column;
`;
const FormLabel = styled.span`
    font-size: 16px;
    flex-grow: 1;
    flex-basis: 0;
    font-family: 'Poiret One', cursive;
`;
const FormTextInput = styled.input`
    font-size: 12px;
    flex-basis: 0;
    flex-grow: 3;
    padding: 0 2px;
    outline: none;
    border: 1px solid #07987d61;
    border-radius: 3px;
    font-family: 'Raleway', sans-serif;
`;
const FormTextArea = styled.textarea`
    font-size: 12px;
    height: 240px;
    padding: 2px;
    margin-top: 4px;
    border: 1px solid #07987d61;
    border-radius: 3px;
    resize: none;
    outline: none;
    font-family: 'Raleway', sans-serif;
`;

const SubmitButton = styled.button`
    color: white;
    padding: 10px;
    border: none;
    border-radius: 6px;
    background: #07987d;
    margin-top 12px;
    font-family: 'Poiret One', cursive;
    font-weight: 600;
`;

const MessageFormComponent = (props) => {
    const [name, setName] = useState('name');
    const [email, setEmail] = useState('default@mail.com');
    const [message, setMessage] = useState('hello hello hello');
    //const [targetdDate, setTargetdDate] = useState('defaultDate');
    
    const onSubmit = () => { 
        props.insertMessage({ message, name, email, 
            recordedDate: Date.now(),
            targetdDate:  Date.now()
        });
    }

    const handleChange = (onChange) => (e) => {
        onChange(e.target?.value);
    }

    const renderFieldAndLabel = (id, title, placeholder, value, onChange) => {
        const inputProps = { id, placeholder, value, type: 'text', onChange: handleChange(onChange) };
        const Field = id == 'message' ? FormTextArea : FormTextInput;
        const Form = id == 'message' ? FormItemArea : FormItemInput;
        return (
            <Form>
                <FormLabel>{title}</FormLabel>
                <Field {...inputProps} />
            </Form>
        );
    }

    const renderForm = () => {
        return (
            <Container>
                <FormWrapper>
                    {renderFieldAndLabel('name', 'Name', 'name', name, setName)}
                    {renderFieldAndLabel('email', 'Email', 'email', email, setEmail)}
                    {renderFieldAndLabel('message', 'Message', 'write something', message, setMessage)}
                    <SubmitButton onClick={onSubmit}>Add message</SubmitButton>
                </FormWrapper>
            </Container>
        )
    }

    return renderForm();
}

export default MessageFormComponent;
