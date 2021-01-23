import styled from 'styled-components';

export const Container = styled.li`
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 3px 5px 2px #e7f2f0;
    margin: 12px;
`;
export const Wrapper = styled.div`
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
`;
export const Name = styled.span`
`;
export const Content = styled.span`
`;


Container.displayName = 'MessageContainer';
Wrapper.displayName = 'MessageWrapper';
Name.displayName = 'Name';
Content.displayName = 'Content';