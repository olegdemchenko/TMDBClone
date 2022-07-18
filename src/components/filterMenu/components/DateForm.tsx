import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  ThemeColors,
  BorderRadiuses,
} from '../../../common/styles';
import DateInput from './DateInput';
import TextDateInput from './TextDateInput';

const labelsStyles = css({
  fontSize: '0.9rem',
  color: ThemeColors.gray,
});

const datesWrapperStyles = css({
  width: 150,
  position: 'relative',
  borderRadius: BorderRadiuses.small,
});

interface DateInputProps {
  label: string;
  date?: Date;
  setDate: (newDate: Date) => void;
}

function DateForm({
  label,
  date,
  setDate,
}: DateInputProps) {
  const [currentDate, changeDate] = useState(date);
  const update = (newDate: Date) => {
    changeDate(newDate);
    setDate(newDate);
  };

  return (
    <form className="d-flex justify-content-between">
      <span css={labelsStyles}>{label}</span>
      <div css={datesWrapperStyles}>
        <TextDateInput
          date={currentDate}
          setDate={update}
        />
        <DateInput
          date={currentDate}
          setDate={update}
        />
      </div>
    </form>
  );
}

export default DateForm;
