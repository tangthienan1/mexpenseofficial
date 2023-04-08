import React, { FC } from 'react';
import DatePicker from 'react-native-date-picker';

type CustomDatePickerProps ={
    open?: boolean,
    date: Date,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setDate: React.Dispatch<any>,
}

const CustomDatePicker:FC<CustomDatePickerProps> = ({ open, date, setOpen, setDate }) => {
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
