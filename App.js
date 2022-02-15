import React, {useEffect} from 'react';
import { Provider as StoreProvider } from 'react-redux'
import configureStore from './app/stores/configureStore';
import Navigation from './app/navigation';
import * as eva from '@eva-design/eva';
import { ApplicationProvider} from '@ui-kitten/components';
const store = configureStore()


export default function App() {

  useEffect( () => {

  })

  return (
    <StoreProvider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Navigation/>
      </ApplicationProvider>
    </StoreProvider>
  );
}
