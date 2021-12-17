import React, { FC } from 'react';
import { Layout, Header, Section, Footer, Title } from './StyledComponents';
import TodoList from './TodoList';
import AddTaskForm from './AddTaskForm';

const App: FC = () => {
  return (
    <Layout>
      <Header>
        <Title>
          ToDo
        </Title>
      </Header>
      <Section>
        <TodoList />
        <AddTaskForm />
      </Section>
      <Footer>
        {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
}

export default App;
