import styled from 'styled-components';
import { Button, Div, Input, InputArea, Li, Span, Ul } from '../common/Base';
import { fontSize } from '../common/Font';
import { Size } from '../common/Size';

export const Container = styled(Div)`
    display: flex;
    flex-grow: 2;
    flex-basis: 0;
`;

export const Wrapper = styled(Ul)`
    list-style: none;
    width: 100%;
    padding: ${Size.XL};
    border-radius: ${Size.XS};
    background-color: #f7f9fb;
`;

export const FormTextInput = styled(Li)`
    display: flex;
    margin-bottom: ${Size.S};
`;
export const FormTextArea = styled(Li)`
    display: flex;
    flex-direction: column;
`;
export const Label = styled(Span)`
    ${fontSize.S}
    flex-grow: 1;
    flex-basis: 0;
`;
export const TextInput = styled(Input)`
    flex-basis: 0;
    flex-grow: 3;
`;

export const TextArea = styled(InputArea)`
    height: 240px;
    margin-top: ${Size.XS};
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
