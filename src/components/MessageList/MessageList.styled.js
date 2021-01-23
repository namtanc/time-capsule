import styled from 'styled-components';
import { Button, Ul } from '../Base.styled';
import RefreshIcon from '../../assets/icon-refresh.svg';

export const Container = styled.div`
    display: flex;
    flex-grow: 2;
    flex-basis: 0;
`;
export const Wrapper = styled(Ul)`
    width: 100%;
    border: 1px solid #f7f9fb;
    border-radius: 16px;
`;

export const RefreshButton = styled(Button)`
    width: 100%;
    list-style: none;
    border: 1px solid #f7f9fb;
    border-radius: 16px;
    background: url(${RefreshIcon}) no-repeat 100px center;
`;

Container.displayName = 'MessageListContainer';
Wrapper.displayName = 'MessageListWrapper';