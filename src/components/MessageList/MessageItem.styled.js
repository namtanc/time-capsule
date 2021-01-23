import styled, { css } from 'styled-components';
import { Div, Li, Span } from '../common/Base';
import { fontSize } from '../common/Font';
import { Spacing } from '../common/Spacing';

export const MessageItemContainer = styled(Li)`
    background-color: #fff;
    border-radius: 4px;
    margin: ${Spacing.M};
`;
export const Wrapper = styled(Div)`
    display: flex;
    flex-direction: column;
    padding: ${Spacing.S};
    margin-bottom: ${Spacing.M};
`;
export const Name = styled(Span)`
    ${fontSize.M}
`;
export const Email = styled(Span)`
    ${fontSize.S}
`;
export const Date = styled(Span)`
    ${fontSize.S}
`;
export const Content = styled(Div)`
    ${fontSize.S}
`;

MessageItemContainer.displayName = 'MessageContainer';
Wrapper.displayName = 'MessageWrapper';
Name.displayName = 'Name';
Email.displayName = 'Email';
Date.displayName = 'Date';
Content.displayName = 'Content';