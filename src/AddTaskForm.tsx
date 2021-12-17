import React, { FC } from 'react';
import styles from './App.module.css';
import { useTodos } from './TodosProvider';
import { useInput } from './useInput';
import { Button } from './StyledComponents';
import FieldText from './FieldText';

const AddTaskForm: FC = () => {
  const { addTask } = useTodos();
  const [ fieldTaskProps, resetFieldTask ] = useInput("");

  const submit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    addTask(fieldTaskProps.value);
    resetFieldTask();
  };

  return (
    <form className={styles.form}
      onSubmit={submit}>
      <FieldText  {...fieldTaskProps}/>
      <Button type="submit" >Создать</Button>
    </form>
  );
};

export default AddTaskForm;