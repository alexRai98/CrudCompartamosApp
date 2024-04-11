/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {AppProvider} from './src/store/ClientContext.tsx';
import {Home} from './src/screens/Home/Home.tsx';
function App(): React.JSX.Element {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppProvider>
        <Home />
      </AppProvider>
    </ApplicationProvider>
  );
}

export default App;
