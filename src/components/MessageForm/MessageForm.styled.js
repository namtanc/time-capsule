import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.ul`
    list-style: none;
    width: 100%;
    padding: 32px;
    border-radius: 24px;
    background-color: #f7f9fb;
`;

export const FormTextInput = styled.li`
    display: flex;
    margin-bottom: 8px;
`;
export const FormTextArea = styled.li`
    display: flex;
    flex-direction: column;
`;
export const Label = styled.span`
    font-size: 16px;
    flex-grow: 1;
    flex-basis: 0;
    font-family: 'Poiret One', cursive;
`;
export const TextInput = styled.input`
    font-size: 12px;
    flex-basis: 0;
    flex-grow: 3;
    padding: 0 2px;
    outline: none;
    border: 1px solid #07987d61;
    border-radius: 3px;
    font-family: 'Raleway', sans-serif;
`;
export const TextArea = styled.textarea`
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

export const SubmitButton = styled.button`
    color: white;
    padding: 10px;
    border: none;
    border-radius: 6px;
    background: #07987d;
    margin-top 12px;
    font-family: 'Poiret One', cursive;
    font-weight: 600;
`;

Container.displayName = 'FormContainer';
Wrapper.displayName = 'FormWrapper';
FormTextInput.displayName = 'FormTextInput';
FormTextArea.displayName = 'FormTextArea';
Label.displayName = 'Label';
TextInput.displayName = 'TextInput';
TextArea.displayName = 'TextArea';
SubmitButton.displayName = 'SubmitButton;'
