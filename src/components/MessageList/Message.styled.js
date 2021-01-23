import styled from 'styled-components';
import { Div, Li, Span } from '../common/Base';

export const Container = styled(Li)`
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 3px 5px 2px #e7f2f0;
    margin: 12px;
`;
export const Wrapper = styled(Div)`
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
`;
export const Name = styled(Span)`
`;
export const Content = styled(Span)`
`;


Container.displayName = 'MessageContainer';
Wrapper.displayName = 'MessageWrapper';
Name.displayName = 'Name';
Content.displayName = 'Content';