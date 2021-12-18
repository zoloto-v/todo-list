import React, { FC } from 'react';
import styles from './App.module.css';
import { FieldTextProps } from './types';

const FieldText: FC<FieldTextProps> = (fieldTextAttr) => {
  return (
    <input type="text"
      {...fieldTextAttr}
      className={styles.fieldText} 
      placeholder='Новая задача' />
  );
};

export default FieldText;