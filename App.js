import React from 'react';
import { createAppContainer } from 'react-navigation';

import AppNavigator from './AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

const App = props => {
  return <AppContainer />;
}

export default App;
