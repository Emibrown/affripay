import React, {useEffect} from 'react';
import { Provider as StoreProvider } from 'react-redux'
import configureStore from './app/stores/configureStore';
import Navigation from './app/navigation';
import CodePush from 'react-native-code-push'
const store = configureStore()


const App = ()=> {

  useEffect( () => {

  })

  return (
    <StoreProvider store={store}>
      <Navigation/>
    </StoreProvider>
  );
}
const codePushOptions = {
  checkFrequency:CodePush.CheckFrequency.ON_APP_START
}

export default CodePush(codePushOptions)(App)