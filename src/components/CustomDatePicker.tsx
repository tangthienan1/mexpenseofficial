import React from 'react';
import DatePicker from 'react-native-date-picker';

const CustomDatePicker = ({ open, date, setOpen, setDate }) => {
    return (
        <DatePicker
            mode="date"
            modal
            open={open}
            date={date}
            onConfirm={(selectedDate) => {
                setOpen(false);
                setDate(selectedDate);
            }}
            onCancel={() => {
                setOpen(false);
            }}
            locale="en"
        />
    );
};

export default CustomDatePicker;
