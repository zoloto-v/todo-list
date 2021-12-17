import React, { FC } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './App.module.css';
import { TaskProps } from './types';
import { useTodos } from './TodosProvider';
import { DeleteButton } from './StyledComponents';

const Task: FC<TaskProps> = (props) => {
  const {id, name, done} = props;
  const { editTask, removeTask } = useTodos();

  const itemStyles = done ? styles.itemDone : styles.item;

  return (
    <li key={id} className={itemStyles}>
      <span>{name}</span>
      <input type="checkbox" 
        className={styles.completed} 
        onChange={() => {editTask(id)}} />
      <DeleteButton>
        <DeleteIcon onClick={() => removeTask(id)} />
      </DeleteButton>
    </li>
  );
};

export default Task;