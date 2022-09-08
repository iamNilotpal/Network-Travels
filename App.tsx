import React from 'react';
import { AlertNotificationRoot } from 'react-native-alert-notification';

import { Provider } from 'react-redux';
import RootNavigation from './src/navigation/RootNavigation';
import { store } from './src/store';

const App = () => (
  <AlertNotificationRoot>
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  </AlertNotificationRoot>
);

export default App;
