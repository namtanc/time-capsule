import React, { useState } from 'react';
import { Message } from '../../models/Message';
import { Container, Label, FormTextArea, FormTextInput, TextArea, 
    TextInput, Wrapper, SubmitButton } from './MessageForm.styled';

const getFieldAndForm = (id) => {
    return id === 'message' ? { Field: TextArea, Form: FormTextArea }
        : { Field: TextInput, Form: FormTextInput };
}
const LabelAndInput = (id, label, placeholder, value, onChange) => {
    const inputProps = { id, placeholder, value, onChange, type: 'text' };
    const { Field, Form } = getFieldAndForm(id);
    return (
        <Form key={id}>
            <Label>{label}</Label>
            <Field {...inputProps} />
        </Form>
    );
}

const MessageForm = (props) => {
    const [name, setName] = useState('name');
    const [email, setEmail] = useState('default@mail.com');
    const [message, setMessage] = useState('hello hello hello');
    const [targetedDate, setTargetedDate] = useState('');
    const [recordedDate, setRecordedDate] = useState('');
    const [tags, setTags] = useState('');

    const onSubmit = () => { 
        props.insertMessage({ message, name, email, 
            recordedDate: Date.now(),
            targetedDate:  Date.now()
        });
    }

    const handleChange = (onChange) => (e) => {
        onChange(e.target?.value);
    }
    
    const renderFields = () => {
        const getLabelAndInput = (label, placeholder, value, onChange) => ({ label, placeholder, value, onChange });
        const field = (id, { label, placeholder, value, onChange }) => LabelAndInput(id, label, placeholder, value, handleChange(onChange));
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
