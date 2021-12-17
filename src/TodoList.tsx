import React, { FC } from 'react';
import styles from './App.module.css';
import { useTodos } from './TodosProvider';
import Task from './Task';

const TodoList: FC = () => {
  const { todos } = useTodos();

  return (
    <ul className={styles.list}>
      {
        todos.map(task => <Task {...task} key={task.id} />)
      }
    </ul>
  );
};

export default TodoList;