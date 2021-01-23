import styled, { css } from 'styled-components';
import { Button, Div, Ul } from '../common/Base';
import RefreshIcon from '../../assets/icon-refresh.svg';
import { MessageItemContainer } from './MessageItem.styled';

import { blue, green, red, yellow } from '../common/Color';
import { Spacing } from '../common/Spacing';
const boxShadowStyle = css`box-shadow: ${Spacing.S} ${Spacing.XS} 0`;
const boxShadowBlue = css`${boxShadowStyle} ${blue};`;
const boxShadowRed = css`${boxShadowStyle} ${red};`;
const boxShadowYellow = css`${boxShadowStyle} ${yellow};`;
const boxShadowGreen = css`${boxShadowStyle} ${green};`;

export const Container = styled(Div)`
    display: flex;
    flex-grow: 2;
    flex-basis: 0;
`;
export const Wrapper = styled(Ul)`
    width: 100%;
    border-radius: ${Spacing.XS};

    & ${MessageItemContainer} {
        &:nth-child(n) { ${boxShadowRed} }
        &:nth-child(2n) { ${boxShadowYellow} }
        &:nth-child(3n) { ${boxShadowBlue} }
        &:nth-child(4n) { ${boxShadowGreen} }
    }
`;

export const RefreshButton = styled(Button)`
    background-image: url(${RefreshIcon});
    background-repeat: no-repeat;
    background-position: center;
`;

Container.displayName = 'MessageListContainer';
Wrapper.displayName = 'MessageListWrapper';