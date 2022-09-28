import React, { useState, useRef } from 'react';
import {
  dateToStringWithDot,
  validateDate,
  parseDate,
} from '../../../../../../common/utils';
import { DateInputProps } from '../DateInput';
import { inputStyles, errorStyles } from './styles';

function TextDateInput({ date, setDate }: DateInputProps) {
  const inputRef = useRef(null);
  const [enteredDate, saveEnteredDate] = useState(dateToStringWithDot(date));
  const [isEnteredDateValid, setEnteredDateValidity] = useState(true);

  function selectValue(propsDate?: Date, localDate?: string) {
    return document.activeElement === inputRef.current
      ? localDate
      : dateToStringWithDot(propsDate);
  }

  const handleTextChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      value: string;
    };
    saveEnteredDate(target.value);
    const isDateValid = validateDate(target.value);
    setEnteredDateValidity(isDateValid);
    if (isDateValid) {
      const parsedDate = parseDate(target.value, 'dot');
      setDate(parsedDate);
    }
  };

  const currentValue = selectValue(date, enteredDate);
  return (
    <input
      css={[inputStyles, isEnteredDateValid ? {} : errorStyles]}
      placeholder='DD.MM.YYYY'
      value={currentValue}
      onChange={handleTextChange}
      onFocus={() => {
        const isValid = validateDate(currentValue as string);
        setEnteredDateValidity(isValid);
      }}
      ref={inputRef}
    />
  );
}

export default TextDateInput;
