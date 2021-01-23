import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-grow: 2;
    flex-basis: 0;
`;
export const Wrapper = styled.ul`
    width: 100%;
    list-style: none;
    border: 1px solid #f7f9fb;
    border-radius: 16px;
`;

Container.displayName = 'MessageListContainer';
Wrapper.displayName = 'MessageListWrapper';