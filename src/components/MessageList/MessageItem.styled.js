import styled, { css } from 'styled-components';

import { Div, Li, Span } from '../common/Base';
import { blue, darkGrey, green, red, yellow } from '../common/Color';
import { fontSize } from '../common/Font';
import { Size } from '../common/Size';

const boxShadowStyle = css`box-shadow: ${Size.S} ${Size.XS} 0`;
const boxShadowBlue = css`${boxShadowStyle} ${blue};`;
const boxShadowRed = css`${boxShadowStyle} ${red};`;
const boxShadowYellow = css`${boxShadowStyle} ${yellow};`;
const boxShadowGreen = css`${boxShadowStyle} ${green};`;

export const MessageItemContainer = styled(Li)`
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: ${Size.M};

    &.red { ${boxShadowRed} }
    &.yellow { ${boxShadowYellow} }
    &.green { ${boxShadowGreen} }
    &.blue { ${boxShadowBlue} }
`;
export const Wrapper = styled(Div)`
    display: flex;
    flex-direction: column;
    padding: ${Size.S};
`;
export const Name = styled(Span)`
    ${fontSize.M}
    margin-bottom: ${Size.XS};
`;
export const Date = styled(Span)`
    ${fontSize.S}
    margin-top: ${Size.XS};
    align-self: flex-end;
`;
export const Content = styled(Div)`
    ${fontSize.S}
    color: ${darkGrey};
`;

MessageItemContainer.displayName = 'MessageContainer';
Wrapper.displayName = 'MessageWrapper';
Name.displayName = 'Name';
Date.displayName = 'Date';
Content.displayName = 'Content';