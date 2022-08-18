import React, { useState } from 'react';
import DateInput from '../DateInput';
import TextDateInput from '../TextDateInput';
import { labelsStyles, datesWrapperStyles } from './styles';

interface DateInputProps {
  label: string;
  date?: Date;
  setDate: (newDate: Date) => void;
}

function DateForm({ label, date, setDate }: DateInputProps) {
  const [currentDate, changeDate] = useState(date);
  const update = (newDate: Date) => {
    changeDate(newDate);
    setDate(newDate);
  };

  return (
    <form className='d-flex justify-content-between'>
      <span css={labelsStyles}>{label}</span>
      <div css={datesWrapperStyles}>
        <TextDateInput date={currentDate} setDate={update} />
        <DateInput date={currentDate} setDate={update} />
      </div>
    </form>
  );
}

export default DateForm;
