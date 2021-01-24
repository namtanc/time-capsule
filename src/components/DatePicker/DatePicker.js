import React from 'react';

import { DatePicker, Wrapper } from './DatePicker.styled';
import { checkValidTargetedDate } from '../../Utils';

const DatePickerComponent = ({ value, onChange }) => {
    const classname = checkValidTargetedDate(value) && 'invalid';
    return (
        <Wrapper className={classname}>
            <DatePicker
                selected={value}
                onChange={onChange}
                placeholderText=""
                dateFormat="dd/MM/yyyy"
                isClearable={false}
            />
        </Wrapper>
    );
};
DatePickerComponent.displayName = 'DatePicker';
export default DatePickerComponent;
