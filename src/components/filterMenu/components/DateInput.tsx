import React from 'react';
import { css } from '@emotion/react';
import {
  ThemeColors,
} from '../../../common/styles';
import {
  dateToStringWithDash,
  stringToDate,
} from '../../../common/utils';
import calendar from '../../../assets/img/calendar.svg';

const dateInputStyles = css({
  position: 'absolute',
  top: 0,
  right: 0,
  height: '100%',
  visibility: 'hidden',
  border: 'none',
  '&:before': {
    position: 'absolute',
    visibility: 'visible',
    width: 30,
    top: 2,
    right: 2,
    bottom: 2,
    content: '""',
    borderRadius: '0 3px 3px 0',
    backgroundColor: ThemeColors.lightGray,
    zIndex: 5,
  },
  '&:after': {
    position: 'absolute',
    visibility: 'visible',
    width: 30,
    height: '100%',
    top: 0,
    right: 0,
    content: '""',
    background: `url(${calendar})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundPosition: '25% 25%',
    zIndex: 8,
  },
  '&:hover': {
    '&:before': {
      backgroundColor: ThemeColors.gray,
    },
  },
});

export interface DateInputProps {
  date? : Date;
  setDate: (newDate: Date) => void;
}

function DateInput({
  date,
  setDate,
}: DateInputProps) {
  const handleDateChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      value: string
    };
    const parsedDate = stringToDate(target.value);
    setDate(parsedDate);
  };

  return (
    <input
      css={dateInputStyles}
      type="date"
      value={date ? dateToStringWithDash(date) : ''}
      onClick={(e) => {
        const dateInput = e.target as HTMLInputElement & {
          showPicker: () => {}
        };
        dateInput.showPicker();
      }}
      onChange={handleDateChange}
    />
  );
}

export default DateInput;
