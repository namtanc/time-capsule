import styled, { css } from 'styled-components';
import ReactDatePicker from 'react-datepicker';

import { Div, inputStyle, invalidStyle } from '../common/Base';
import { black, blue, green, red, white, yellow } from '../common/Color';
import { fontMonogram, fontSize } from '../common/Font';
import { Size } from '../common/Size';
import "react-datepicker/dist/react-datepicker.css";

export const DatePicker = styled(ReactDatePicker)`
    ${fontMonogram}
    ${fontSize.S}
    ${inputStyle}
    width: 100%;
`;

const overrideWrapperAndHeader = css`
    .react-datepicker {
        ${fontMonogram}
        ${fontSize.S}
    }

    .react-datepicker__day-name, .react-datepicker__current-month {
        color: ${white};
        ${fontSize.S}
    }

    .react-datepicker__header {
        background: ${black};
    }

    .react-datepicker__triangle::before {
        border-bottom-color: ${black} !important;
    }

    .react-datepicker__navigation--previous {
        border-right-color: ${white};
    }

    .react-datepicker__navigation--next {
        border-left-color: ${white};
    }
`;

const overrideCalendar = css`
    .react-datepicker__day {
        border-radius: ${Size.XS};
    }

    .react-datepicker__day:hover, .react-datepicker__day:focus {
        color: ${white};
        background: ${green};
        outline: none;
    }

    .react-datepicker__day--today {
        color: ${black};
        background: none;
        box-shadow: 0 0 1px 1px ${yellow};
    }

    .react-datepicker__day--selected {
        color: ${white};
        background-color: ${blue};
    }
`;

const overrideInvalidDate = css`
    &.invalid ${DatePicker} {
        ${invalidStyle}
    }

    &.invalid .react-datepicker__day--selected {
        background-color: ${red};
    }
`;
const overrideInputField = css`
    &, .react-datepicker-wrapper, .react-datepicker__input-container {
        display: flex;
        flex-grow: 1;
    }
`;

export const Wrapper = styled(Div)`
    margin-top: ${Size.XS};
    ${overrideWrapperAndHeader}
    ${overrideInvalidDate}
    ${overrideCalendar}
    ${overrideInputField}
`;

Wrapper.displayName = 'DatePickerWrapper';