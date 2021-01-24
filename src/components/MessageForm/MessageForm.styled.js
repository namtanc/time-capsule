import styled from 'styled-components';
import { Button, Div, Input, InputArea, Li, Span, Ul } from '../common/Base';
import { formBackgroundColor } from '../common/Color';
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
    background-color: ${formBackgroundColor};
`;

export const FormTextInput = styled(Li)`
    display: flex;
    margin-bottom: ${Size.S};
`;
export const FormTextArea = styled(Li)`
    display: flex;
    flex-direction: column;
    margin-bottom: ${Size.S};
`;
export const Label = styled(Span)`
    ${fontSize.S}
    line-height: ${Size.L};
    letter-spacing: 0.03rem;
    flex-grow: 1;
    flex-basis: 0;
`;
export const TextInput = styled(Input)`
    flex-basis: 0;
    flex-grow: 3;
`;

export const TextArea = styled(InputArea)`
    height: ${Size.MessageArea};
    margin-top: ${Size.XS};
`;

export const SubmitButton = styled(Button)`
    margin-top: ${Size.M};
    float: right;
`;

Container.displayName = 'FormContainer';
Wrapper.displayName = 'FormWrapper';
FormTextInput.displayName = 'FormTextInput';
FormTextArea.displayName = 'FormTextArea';
Label.displayName = 'Label';
TextInput.displayName = 'TextInput';
TextArea.displayName = 'TextArea';
SubmitButton.displayName = 'SubmitButton;'
