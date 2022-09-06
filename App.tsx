import React from 'react';

import { Provider } from 'react-redux';
import RootNavigation from './src/navigation/RootNavigation';
import { store } from './src/store';

const App = () => (
  <Provider store={store}>
    <RootNavigation />
  </Provider>
);

export default App;
