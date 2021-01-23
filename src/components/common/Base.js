import styled, { createGlobalStyle, css } from 'styled-components';

import { white,blue } from './Color';
import { font, fontMonogram, fontSize } from './Font';
import { Spacing } from './Spacing';

export default createGlobalStyle`
    ${font}
`;

export const inputStyle = css`
    padding: 0 ${Spacing.XS};
    outline: none;
    border: none;
    border-radius: ${Spacing.XS};
`;

export const Input = styled.input`
    ${fontMonogram}
    ${fontSize.S}
    ${inputStyle}
`;
export const InputArea = styled.textarea`
    ${fontMonogram}
    ${fontSize.S}
    ${inputStyle}
    resize: none;
`;

export const Button = styled.button`
    ${fontMonogram}
    ${fontSize.M}
    color: ${white};
    padding: 10px;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    background-color: ${blue};
    cursor: pointer;
`;

export const Ul = styled.ul`
    ${fontMonogram}
    list-style: none;
`;

export const Li = styled.li`
    ${fontMonogram}
`;

export const Div = styled.div`
    ${fontMonogram}
`;

export const Span = styled.span`
    ${fontMonogram}
`;
