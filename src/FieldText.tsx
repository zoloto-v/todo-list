import React, { FC } from 'react';
import styles from './App.module.css';
import { FieldTextProps } from './types';

const FieldText: FC<FieldTextProps> = (props) => {
  const { value, onChange } = props;

  return (
    <input type="text"
      className={styles.fieldText} 
      placeholder='Новая задача'
      onChange={onChange}
      value={value} />
  );
};

export default FieldText;