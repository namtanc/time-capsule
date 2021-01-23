import React from 'react';
import ReactDatePicker from 'react-datepicker';

const DatePicker = ({ value, onChange }) => {
    return (
        <ReactDatePicker
            selected={value}
            isClearable={false}
            onChange={onChange}
            placeholderText=""
        />
    );
};
DatePicker.displayName = 'DatePicker';
export default DatePicker;
