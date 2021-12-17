export interface TaskProps {
  id: string,
  name: string,
  done: boolean,
};

export interface TodoListProps {
  items: TaskProps[],
};

export interface TodosContextValue {
  todos: TaskProps[];
  addTask: (e: string) => void;
  editTask: (e: string) => void;
  removeTask: (id: string) => void;
};

export interface TodosProviderProps {
  children?: React.ReactNode;
};

export interface FieldTextProps {
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};