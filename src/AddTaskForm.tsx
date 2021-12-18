import React, { FC } from 'react';
import styles from './App.module.css';
import { useInput } from './useInput';
import { Button } from './StyledComponents';
import FieldText from './FieldText';
import todoStore from './store/TodoStore';

const { addTask } = todoStore;

const AddTaskForm: FC = () => {
  const [ fieldTaskProps, resetFieldTask ] = useInput("");

  const submit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    addTask.call(todoStore, fieldTaskProps.value);
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