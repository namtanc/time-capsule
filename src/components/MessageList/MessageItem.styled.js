import styled, { css } from 'styled-components';
import { Div, Li, Span } from '../common/Base';
import { grey } from '../common/Color';
import { fontSize } from '../common/Font';
import { Size } from '../common/Size';

export const MessageItemContainer = styled(Li)`
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: ${Size.M};
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
`;

MessageItemContainer.displayName = 'MessageContainer';
Wrapper.displayName = 'MessageWrapper';
Name.displayName = 'Name';
Date.displayName = 'Date';
Content.displayName = 'Content';