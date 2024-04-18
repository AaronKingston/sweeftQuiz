import 'react-native-gesture-handler';
import React from 'react';
import Routes from './navigation/Router';
import {Provider} from 'react-redux';
import {store} from './store/store';

import {Host} from 'react-native-portalize';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ThemeContextProvider} from './store/context/theme-context';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Host>
        {/* <ThemeContextProvider> */}
        <Provider store={store}>
          <Routes />
        </Provider>
        {/* </ThemeContextProvider> */}
      </Host>
    </GestureHandlerRootView>
  );
}

export default App;
