import React, { FC } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './App.module.css';
import { TaskProps } from './types';
import { DeleteButton } from './StyledComponents';
import todoStore from './store/TodoStore';

const Task: FC<TaskProps> = (props) => {
  const {id, name, done } = props;
  const itemStyles = done ? styles.itemDone : styles.item;

  return (
    <li key={id} className={itemStyles}>
      <span>{name}</span>
      <input type="checkbox" 
        className={styles.completed} 
        checked={done}
        onChange={() => todoStore.editTask(id)} />
      <DeleteButton>
        <DeleteIcon onClick={() => todoStore.removeTask(id)} />
      </DeleteButton>
    </li>
  );
};

export default Task;