import React, {useEffect} from 'react';
import { Provider as StoreProvider } from 'react-redux'
import configureStore from './app/stores/configureStore';
import Navigation from './app/navigation';
const store = configureStore()


export default function App() {

  useEffect( () => {

  })

  return (
    <StoreProvider store={store}>
      <Navigation/>
    </StoreProvider>
  );
}
