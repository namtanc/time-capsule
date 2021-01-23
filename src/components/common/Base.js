import styled, { createGlobalStyle, css } from 'styled-components';

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
    ${fontSize.S}
    ${inputStyle}
`;
export const InputArea = styled.textarea`
    ${fontSize.S}
    ${inputStyle}
    resize: none;
`;

export const Button = styled.button`
    ${fontSize.M}
    color: white;
    padding: 10px;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    background: #07987d;
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
