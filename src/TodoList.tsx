import React, { FC } from 'react';
import { observer } from 'mobx-react';
import styles from './App.module.css';
import Task from './Task';
import { TaskProps } from './types';

type TodoListProps = {
  store: {
    todos: TaskProps[],
  },
};

const TodoList: FC<TodoListProps> = observer(({ store }) => {
  return (
    <ul className={styles.list}>
      { store.todos.map(task => <Task {...task} key={task.id} />) }
    </ul>
  );
});

export default TodoList;