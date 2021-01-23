import React from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ value, onChange }) => {
    return (
        <ReactDatePicker
            selected={value}
            isClearable={false}
            onChange={onChange}
            placeholderText=""
            dateFormat="dd/MM/yyyy"
        />
    );
};
DatePicker.displayName = 'DatePicker';
export default DatePicker;
