import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import TodosProvider from './TodosProvider';

import './index.css';

const store = {
  version: '2.0.1',
};

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <TodosProvider>
        <App />
      </TodosProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);