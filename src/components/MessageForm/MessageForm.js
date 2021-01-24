import React, { useState } from 'react';

import { Message } from '../../models/Message';
import { formatDateTimeStamp } from '../../Utils';
import DatePicker from '../DatePicker/DatePicker';

import { Container, Label, FormTextArea, FormTextInput, TextArea, 
    TextInput, Wrapper, SubmitButton } from './MessageForm.styled';

const getFormType = (fieldName) => (fieldName === 'message' || fieldName === 'targetedDate') ? FormTextArea : FormTextInput;
const getFormInput = (fieldName) => {
    switch(fieldName) {
        case 'message':
            return TextArea;
        case 'targetedDate':
            return DatePicker;   
        default: 
            return TextInput;
    }
};

const LabelAndInput = (fieldName, value, setValue) => {
    const label = Message.Label[fieldName];
    const placeholder = Message.PlaceHolder[fieldName];
    const Form = getFormType(fieldName);
    const Input = getFormInput(fieldName);

    const onChange = (e) => (Input.displayName === 'DatePicker') ?
        setValue(new Date(e))
        : setValue(e.target?.value);

    const inputProps = { fieldName, placeholder, value, onChange, type: 'text' };

    return (
        <Form key={fieldName}>
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
    const [tags, setTags] = useState(Message.DefaultValue.tags);

    const onSubmit = () => { 
        props.insertMessage({ message, name, email, 
            recordedDate: formatDateTimeStamp(Message.DefaultValue.recordedDate), 
            targetedDate: formatDateTimeStamp(targetedDate)
        });
    }
    
    const renderFields = () => {
        const getLabelAndInput = (value, onChange) =>({ value, onChange });
        const field = (id, { value, onChange }) => LabelAndInput(id, value, onChange);
        const FormLabelAndInputs = {
            [Message.Field.name]: getLabelAndInput(name, setName),
            [Message.Field.email]: getLabelAndInput(email, setEmail),
            [Message.Field.message]: getLabelAndInput(message, setMessage),
            [Message.Field.targetedDate]: getLabelAndInput(targetedDate, setTargetedDate),
            [Message.Field.tags]: getLabelAndInput(tags, setTags),
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
