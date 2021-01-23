import { css } from 'styled-components';
import monogram_extended from '../../assets/monogram_extended.ttf';

export const fontMonogram = css`
    font-family: Monogram, sans-serif;
`;

export const fontSize = {
    XS: css`${fontMonogram} font-size: 1rem;`,
    S: css`${fontMonogram} font-size: 1.5rem;`,
    M: css`${fontMonogram} font-size: 2rem;`,
    L: css`${fontMonogram} font-size: 3rem;`,
};

export const font = css`
    @font-face {
        font-family: 'Monogram';
        src: url(${monogram_extended}) format('truetype');
        font-style: normal;
    }
`;