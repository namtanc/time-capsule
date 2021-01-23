import { Input, InputArea, Button, Ul, Li } from '../Base.styled';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled(Ul)`
    list-style: none;
    width: 100%;
    padding: 32px;
    border-radius: 24px;
    background-color: #f7f9fb;
`;

export const FormTextInput = styled(Li)`
    display: flex;
    margin-bottom: 8px;
`;
export const FormTextArea = styled(Li)`
    display: flex;
    flex-direction: column;
`;
export const Label = styled.span`
    font-size: 16px;
    flex-grow: 1;
    flex-basis: 0;
    font-family: 'Poiret One', cursive;
`;
export const TextInput = styled(Input)`
    flex-basis: 0;
    flex-grow: 3;
`;

export const TextArea = styled(InputArea)`
    height: 240px;
    margin-top: 4px;
`;

export const SubmitButton = styled(Button)`
`;

Container.displayName = 'FormContainer';
Wrapper.displayName = 'FormWrapper';
FormTextInput.displayName = 'FormTextInput';
FormTextArea.displayName = 'FormTextArea';
Label.displayName = 'Label';
TextInput.displayName = 'TextInput';
TextArea.displayName = 'TextArea';
SubmitButton.displayName = 'SubmitButton;'
