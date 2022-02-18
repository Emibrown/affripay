import React, {useEffect} from 'react';
import { Provider as StoreProvider } from 'react-redux'
import configureStore from './app/stores/configureStore';
import Navigation from './app/navigation';
import CodePush from 'react-native-code-push'
import * as eva from '@eva-design/eva';
import { ApplicationProvider} from '@ui-kitten/components';
const store = configureStore()


const App = (props)=> {

  useEffect( () => {

  })

  return (
    <StoreProvider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Navigation {...props}/>
      </ApplicationProvider>
    </StoreProvider>
  );
}
const codePushOptions = {
  checkFrequency:CodePush.CheckFrequency.ON_APP_RESUME,
  installMode: CodePush.InstallMode.IMMEDIATE
}

export default CodePush(codePushOptions)(App)