import { css } from 'styled-components';
import monogram_extended from '../../assets/monogram_extended.ttf';

export const fontMonogram = css`
    font-family: Monogram, sans-serif;
`;

export const textSize = {
    XS: '1rem;',
    S: '1.5rem;',
    M: '2rem;',
    L: '3rem;',
};

export const fontSize = {
    XS: css`font-size: ${textSize.XS};`,
    S: css`font-size: ${textSize.S};`,
    M: css`font-size: ${textSize.M};`,
    L: css`font-size: ${textSize.L};`,
};


export const font = css`
    @font-face {
        font-family: 'Monogram';
        src: url(${monogram_extended}) format('truetype');
        font-style: normal;
    }
`;