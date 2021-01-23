import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';

import { fontMonogram, fontSize } from '../common/Font';
import { Div, inputStyle } from '../common/Base';

export const DatePicker = styled(ReactDatePicker)`
    ${fontMonogram}
    ${fontSize.S}
    ${inputStyle}
`;

export const Wrapper = styled(Div)`
    .react-datepicker, .react-datepicker__current-month {
        ${fontMonogram}
        ${fontSize.S}
    }

    .react-datepicker__day--selected {
        background-color: red;
    }
`;
