import styled from 'styled-components';
import { Button, Div, Ul } from '../common/Base';
import RefreshIcon from '../../assets/icon-refresh.svg';

export const Container = styled(Div)`
    display: flex;
    flex-grow: 2;
    flex-basis: 0;
`;
export const Wrapper = styled(Ul)`
    width: 100%;
`;

export const RefreshButton = styled(Button)`
    width: 100%;
    list-style: none;
    border-radius: 16px;
    background: #f7f9fb url(${RefreshIcon}) no-repeat center;
`;

Container.displayName = 'MessageListContainer';
Wrapper.displayName = 'MessageListWrapper';