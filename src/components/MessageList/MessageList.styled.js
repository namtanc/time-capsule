import styled from 'styled-components';
import { Div, scrollbarStyle, Ul } from '../common/Base';

import { Size } from '../common/Size';

export const Container = styled(Div)`
    display: flex;
    flex-direction: column;
    flex-grow: 3;
    flex-basis: 0;
`;
export const Wrapper = styled(Ul)`
    width: 100%;
    border-radius: ${Size.XS};
    overflow-y: auto;
    padding: 0 ${Size.M};
    box-sizing: border-box;
    ${scrollbarStyle}
`;

Container.displayName = 'MessageListContainer';
Wrapper.displayName = 'MessageListWrapper';