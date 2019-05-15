import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './client/Reducers/index';
import AppNavigator from './client/AppNavigator';

const finalCreateStore = applyMiddleware(thunk)(createStore);   
let store = finalCreateStore(reducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}