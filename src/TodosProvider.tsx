import React, { FC, createContext, useContext, useEffect, useState } from 'react';
import { TodosContextValue, TodosProviderProps, TaskProps } from './types';
import { apiData } from './api-data';
import { v4 } from 'uuid';

/**
 * declare context and hooks for hist using
 */
const initialContext: TodosContextValue = {
  todos: [],
  addTask: (t) => {},
  editTask: (id) => {},
  removeTask: (id) => {},
};

const TodosContext = createContext(initialContext);
export const useTodos = () => useContext(TodosContext);

/**
 * 
 * @param children
 * @returns React.Context.Provider component
 */
const TodosProvider: FC<TodosProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<TaskProps[]>([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const data = await Promise.resolve(apiData);
        setTodos(data);        
      } catch (err) {
        console.log(err);
        setTodos([]);
      }
    };

    fetchData();
  }, []);

  const addTask = (name: string) => setTodos([
    ...todos,
    {
      id: v4(),
      name,
      done: false,
    },
  ]);

  const editTask = (id: string) => {
    const editedTodos = todos.map(task => (task.id === id) ? { ...task, done: !task.done } : task);
    setTodos(editedTodos);
  };

  const removeTask = (id: string) => {
    const removedTodos = todos.filter(task => task.id !== id);
    setTodos(removedTodos);
  };

  return (
    <TodosContext.Provider value={{
      todos,
      addTask,
      editTask,
      removeTask,
    }}>
      { children }
    </TodosContext.Provider>
  )
};

export default TodosProvider;