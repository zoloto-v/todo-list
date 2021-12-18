import { TaskProps } from '../types';
import { v4 } from 'uuid';
import { makeObservable, observable, action, computed, autorun } from 'mobx';

class TodoStore {
  todos: TaskProps[] = [
    {
      id: "09f9c160-fafb-40e1-84bd-1f2dc909763f",
      name: "learn mobx framework",
      done: false,
    },
    {
      id: "736f5bfb-b4f3-48e4-8477-d4135c12c8af",
      name: "learn styled components",
      done: true,
    },
    {
      id: "b952b09b-cbe5-410f-b356-6efce3324023",
      name: "learn patterns",
      done: false,
    },
    {
      id: "71679b69-644b-4d1c-882f-16e3c20efda3",
      name: "learn algorytms",
      done: false,
    },
    {
      id: "fc4a8d7c-f91e-484c-b2b6-85fe3272af4e",
      name: "fitness",
      done: false,
    },
  ];

  constructor() {
    /**
     * @this Store класс модели
     * @Attributes карта аннотаций 
     */
    makeObservable(this, {
      todos: observable,
      addTask: action,
      removeTask: action,
      doneTodosCount: computed,
    });
  }

  /**
   * производные от состояния или computed-значения
   */
  get doneTodosCount() {
    return this.todos.filter(task => task.done === true).length;
  }

  addTask(text: string) {
    this.todos.push({
      id: v4(),
      name: text,
      done: false,
    });
  }

  removeTask(id: string) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  editTask(id: string) {
    this.todos = this.todos.map(t => {
      if (t.id === id) {
        return { 
          ...t,
          done: !t.done
        } 
      } else {
        return t;
      }
    });
  }
}

const todoStore = new TodoStore();

/**
 * запускается после изменения свойства todos
 * реакции побочный эффект изменения состояния
 */
autorun(() => console.log(todoStore.todos));

export default todoStore;