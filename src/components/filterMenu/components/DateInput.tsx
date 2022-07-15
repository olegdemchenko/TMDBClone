import React from 'react';
import { css } from '@emotion/react';
import calendar from '../../../assets/img/calendar.svg';
import {
  ThemeColors,
  BorderRadiuses,
} from '../../../common/styles';

const labelsStyles = css({
  fontSize: '0.9rem',
  color: ThemeColors.gray,
});

const datesWrapperStyles = css({
  width: 150,
  position: 'relative',
  borderRadius: BorderRadiuses.small,
});

const textInputStyles = css({
  width: '100%',
  position: 'relative',
  border: `2px solid ${ThemeColors.lightGray}`,
  borderRadius: BorderRadiuses.small,
  outline: 'none',
  backgroundColor: 'transparent',
  '&:focus': {
    border: `2px solid ${ThemeColors.lightBlue}`,
  },
  zIndex: 1,
});

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

interface DateInputProps {
  label: string;
}

function DateInput({ label }: DateInputProps) {
  return (
    <form className="d-flex justify-content-between">
      <label css={labelsStyles} htmlFor={label}>{label}</label>
      <div css={datesWrapperStyles}>
        <input
          css={textInputStyles}
          id={label}
          value=""
        />
        <input
          css={dateInputStyles}
          type="date"
          onClick={(e) => {
            const dateInput = e.target as HTMLInputElement & {
              showPicker: () => {}
            };
            dateInput.showPicker();
          }}
        />
      </div>
    </form>
  );
}

export default DateInput;
