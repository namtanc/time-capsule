import styled from 'styled-components';

import { Button, Div } from './components/common/Base';
import { black, buttonColor } from './components/common/Color';
import { fontSize, textSize } from './components/common/Font';
import RefreshIcon from './assets/icon-refresh.svg';

export const Container = styled(Div)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${black};
`;
    
export const Wrapper = styled(Div)`
    display: flex;
    width: 60%;
    height: 60%;
    margin: auto;
`;

export const Loading = styled(Div)`
    display: flex;
    width: 800px;
    height: 600px;
    margin: auto;
    color: blue;
    ${fontSize.L}
`;

export const RefreshButton = styled(Button)`
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    background: ${buttonColor} url(${RefreshIcon}) no-repeat center;
    background-size: ${textSize.S};
`;

Container.displayName = 'Container';
Wrapper.displayName = 'Wrapper';
RefreshButton.displayName = 'RefreshButton';