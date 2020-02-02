import React from 'react';
import TodoList from './pages/todo/List';
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
