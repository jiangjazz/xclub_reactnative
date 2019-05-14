import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './client/Reducers/index';
import AppNavigator from './client/AppNavigator';

const store = createStore(reducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}