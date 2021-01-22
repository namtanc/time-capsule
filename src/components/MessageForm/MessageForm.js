import React, { useState } from 'react';
import { Message } from '../../models/Message';
import { Container, FormLabel, FormItemArea, FormItemInput, FormTextArea, 
    FormTextInput, FormWrapper, SubmitButton } from './MessageForm.styled';

const LabelAndInput = (id, label, placeholder, value, onChange) => {
    const inputProps = { id, placeholder, value, onChange, type: 'text' };
    const Field = id == 'message' ? FormTextArea : FormTextInput;
    const Form = id == 'message' ? FormItemArea : FormItemInput;
    return (
        <Form>
            <FormLabel>{label}</FormLabel>
            <Field {...inputProps} />
        </Form>
    );
}

const MessageFormComponent = (props) => {
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
                <FormWrapper>
                    {renderFields()}
                    <SubmitButton onClick={onSubmit}>Add message</SubmitButton>
                </FormWrapper>
            </Container>
        )
    }

    return renderForm();
}

export default MessageFormComponent;
