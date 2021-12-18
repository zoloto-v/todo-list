import React, { FC } from 'react';
import { Layout, Header, Section, Footer, Title } from './StyledComponents';
import TodoList from './TodoList';
import AddTaskForm from './AddTaskForm';
import todoStore from './store/TodoStore';

const App: FC = () => {
  return (
    <Layout>
      <Header>
        <Title>
          ToDo
        </Title>
      </Header>
      <Section>
        <TodoList store={todoStore} />
        <AddTaskForm />
      </Section>
      <Footer>
        {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
}

export default App;
