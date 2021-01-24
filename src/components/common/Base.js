import styled, { createGlobalStyle, css } from 'styled-components';

import { white, buttonColor, placeHolderColor, black } from './Color';
import { font, fontMonogram, fontSize } from './Font';
import { Size } from './Size';

export default createGlobalStyle`
    ${font}
`;

const colorBlack = css`color: ${black};`;
export const inputStyle = css`
    padding: 0 ${Size.XS};
    outline: none;
    border: 1px solid transparent;
    border-radius: ${Size.XS};
    ${colorBlack}

    &::placeholder {
        color: ${placeHolderColor}
    }
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
    background-color: ${buttonColor};
    cursor: pointer;
`;

export const Ul = styled.ul`
    ${fontMonogram}
    ${colorBlack}
    list-style: none;
`;

export const Li = styled.li`
    ${colorBlack}
    ${fontMonogram}
`;

export const Div = styled.div`
    ${colorBlack}
    ${fontMonogram}
`;

export const Span = styled.span`
    ${colorBlack}
    ${fontMonogram}
`;
