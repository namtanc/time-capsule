import styled, { createGlobalStyle, css } from 'styled-components';

import { white, buttonColor, placeHolderColor, black, yellow, red, buttonActiveColor, inputFieldColor } from './Color';
import { font, fontMonogram, fontSize } from './Font';
import { Size } from './Size';

import DinoYellowWait from '../../assets/dino-yellow-wait.gif';
import DinoRedErr from '../../assets/dino-red-err.gif';

export default createGlobalStyle`
    ${font}
`;

const colorBlack = css`color: ${black};`;
export const invalidStyle = css`
    background: ${white} url(${DinoRedErr}) no-repeat right top;
    background-size: ${Size.L};
    border-color: ${red};
`;

export const inputStyle = css`
    padding: ${Size.XXS} ${Size.L} ${Size.XXS} ${Size.XS};
    outline: none;
    border: 1px solid transparent;
    border-radius: ${Size.XS};
    background-color: ${white};
    color: ${inputFieldColor};

    &::placeholder {
        color: ${placeHolderColor}
    }

    &:focus-within {
        background: ${white} url(${DinoYellowWait}) no-repeat right top;
        background-size: ${Size.L};
        border-color: ${yellow};
    }

    &.invalid {
        ${invalidStyle}
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
    transition: background-color 0.1s;
    cursor: pointer;

    &:active, &:hover {
        background-color: ${buttonActiveColor};
    }

    &:focus {
        outline: none;
    }
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

export const scrollbarStyle = css`
    &::-webkit-scrollbar {
        width: ${Size.M};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${white};
        border-radius: ${Size.XS};
    }

    &::-webkit-scrollbar-button {
        height: 0;
    }
`;
