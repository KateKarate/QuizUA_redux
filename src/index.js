import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './Quiz';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Quiz />
  </Provider>,
  document.getElementById('root')
);