/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { FormClient } from "./src/components/Home/FormClient/FormClient.tsx";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from '@eva-design/eva';
function App(): React.JSX.Element {

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <FormClient/>
    </ApplicationProvider>
  );
}

export default App;
