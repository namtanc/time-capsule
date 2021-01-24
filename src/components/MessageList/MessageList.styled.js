import styled, { css } from 'styled-components';
import { Div, Ul } from '../common/Base';
import { MessageItemContainer } from './MessageItem.styled';

import { black, blue, green, red, white, yellow } from '../common/Color';
import { Size } from '../common/Size';
const boxShadowStyle = css`box-shadow: ${Size.S} ${Size.XS} 0`;
const boxShadowBlue = css`${boxShadowStyle} ${blue};`;
const boxShadowRed = css`${boxShadowStyle} ${red};`;
const boxShadowYellow = css`${boxShadowStyle} ${yellow};`;
const boxShadowGreen = css`${boxShadowStyle} ${green};`;

export const Container = styled(Div)`
    display: flex;
    flex-direction: column;
    flex-grow: 3;
    flex-basis: 0;
`;
export const Wrapper = styled(Ul)`
    width: 100%;
    border-radius: ${Size.XS};
    overflow-y: auto;
    padding: 0 ${Size.M};
    box-sizing: border-box;

    & ${MessageItemContainer} {
        &:nth-child(n) { ${boxShadowRed} }
        &:nth-child(2n) { ${boxShadowYellow} }
        &:nth-child(3n) { ${boxShadowBlue} }
        &:nth-child(4n) { ${boxShadowGreen} }
    }

    &::-webkit-scrollbar {
        width: 1rem;
    }

    &::-webkit-scrollbar-button {
        outline-color: ${white};
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: ${white};
    }
`;

Container.displayName = 'MessageListContainer';
Wrapper.displayName = 'MessageListWrapper';