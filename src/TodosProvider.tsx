import React, { FC, createContext, useContext, useEffect, useState } from 'react';
import { TodosContextValue, TodosProviderProps, TaskProps } from './types';
import { apiData } from './api-data';
import { v4 } from 'uuid';

const initialContext: TodosContextValue = {
  todos: [],
  addTask: (t) => {},
  editTask: (id) => {},
  removeTask: (id) => {},
};

const TodosContext = createContext(initialContext);
export const useTodos = () => useContext(TodosContext);

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

  const removeTask = (id: string) => todos.filter(task => task.id !== id);

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