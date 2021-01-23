import styled from 'styled-components';

import { Div } from './components/common/Base';
import { fontSize } from './components/common/Font';

export const Container = styled(Div)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
`;
    
export const Wrapper = styled(Div)`
    display: flex;
    width: 800px;
    height: 600px;
    margin: auto;
`;

export const Loading = styled(Wrapper)`
    color: blue;
    ${fontSize.L}
`;

Container.displayName = 'Container';
Wrapper.displayName = 'Wrapper';