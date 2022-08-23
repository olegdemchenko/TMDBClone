import React from 'react';
import {
  dateToStringWithDash,
  parseDate,
} from '../../../../../../common/utils';
import { dateInputStyles } from './styles';

export interface DateInputProps {
  date?: Date;
  setDate: (newDate: Date) => void;
}

function DateInput({ date, setDate }: DateInputProps) {
  const handleDateChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      value: string;
    };
    const parsedDate = parseDate(target.value, 'dash');
    setDate(parsedDate);
  };

  return (
    <input
      css={dateInputStyles}
      type='date'
      value={date ? dateToStringWithDash(date) : ''}
      onClick={(e) => {
        const dateInput = e.target as HTMLInputElement & {
          showPicker: () => {};
        };
        dateInput.showPicker();
      }}
      onChange={handleDateChange}
    />
  );
}

export default DateInput;
