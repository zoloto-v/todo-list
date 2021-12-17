import { useState } from 'react';
import { FieldTextProps, } from './types';

/**
 * 
 * @param initialValue string
 * @returns [InputTypeText attributes, Function]
 */
export const useInput = (initialValue: string = ""): [ FieldTextProps, () => void] => {
  const [value, setValue] = useState(initialValue);
  const resetInput = () => setValue("");

  return [
    { value, onChange: (e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value) },
    resetInput,
  ];
};