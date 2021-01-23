import React from 'react';

import { DatePicker, Wrapper } from './DatePicker.styled';
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({ value, onChange }) => {
    return (
        <Wrapper>
            <DatePicker
                selected={value}
                isClearable={false}
                onChange={onChange}
                placeholderText=""
                dateFormat="dd/MM/yyyy"
            />
        </Wrapper>
    );
};
DatePickerComponent.displayName = 'DatePicker';
export default DatePickerComponent;
