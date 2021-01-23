import React, { useState } from 'react';

import { Message } from '../../models/Message';
import DatePicker from '../DatePicker/DatePicker';

import { Container, Label, FormTextArea, FormTextInput, TextArea, 
    TextInput, Wrapper, SubmitButton } from './MessageForm.styled';

const getFormType = (id) => id === 'message' ? FormTextArea : FormTextInput;
const getFormInput = (id) => {
    switch(id) {
        case 'message':
            return TextArea;
        case 'targetedDate':
        case 'recordedDate':
            return DatePicker;   
        default: 
            return TextInput;
    }
};

const LabelAndInput = (id, label, placeholder, value, setValue) => {
    const Form = getFormType(id);
    const Input = getFormInput(id);

    const onChange = (e) => (Input.displayName === 'DatePicker') ?
        setValue(new Date(e))
        : setValue(e.target?.value);

    const inputProps = { id, placeholder, value, onChange, type: 'text' };

    return (
        <Form key={id}>
            <Label>{label}</Label>
            <Input {...inputProps} />
        </Form>
    );
}

const MessageForm = (props) => {
    const [name, setName] = useState(Message.DefaultValue.name);
    const [email, setEmail] = useState(Message.DefaultValue.email);
    const [message, setMessage] = useState(Message.DefaultValue.message);
    const [targetedDate, setTargetedDate] = useState(Message.DefaultValue.targetedDate);
    const [recordedDate, setRecordedDate] = useState(Message.DefaultValue.recordedDate);
    const [tags, setTags] = useState(Message.DefaultValue.tags);

    const onSubmit = () => { 
        props.insertMessage({ message, name, email, recordedDate, targetedDate });
    }
    
    const renderFields = () => {
        const getLabelAndInput = (label, placeholder, value, onChange) => ({ label, placeholder, value, onChange });
        const field = (id, { label, placeholder, value, onChange }) => LabelAndInput(id, label, placeholder, value, onChange);
        const FormLabelAndInputs = {
            [Message.Field.name]: getLabelAndInput('Name', 'name', name, setName),
            [Message.Field.email]: getLabelAndInput('Email', 'email', email, setEmail),
            [Message.Field.message]: getLabelAndInput('Message', 'message', message, setMessage),
            [Message.Field.targetedDate]: getLabelAndInput('TargetedDate', 'targetedDate', targetedDate, setTargetedDate),
            [Message.Field.recordedDate]: getLabelAndInput('RecordedDate', 'recordedDate', recordedDate, setRecordedDate),
            [Message.Field.tags]: getLabelAndInput('Tags', 'tags', tags, setTags),
        };

        const fields = Object.entries(FormLabelAndInputs);
        return fields.map((val) => field(val[0], {...val[1]}));
    }

    const renderForm = () => {
        return (
            <Container>
                <Wrapper>
                    {renderFields()}
                    <SubmitButton onClick={onSubmit}>Add message</SubmitButton>
                </Wrapper>
            </Container>
        )
    }

    return renderForm();
}

MessageForm.displayName = 'MessageForm';
export default MessageForm;
