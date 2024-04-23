import 'react-native-gesture-handler';
import React from 'react';
import Routes from './navigation/Router';
import {Provider} from 'react-redux';
import {store} from './store/store';

import {Host} from 'react-native-portalize';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppThemeProviderWrapper from './store/ThemeContext';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Host>
        <AppThemeProviderWrapper>
          <Provider store={store}>
            <Routes />
          </Provider>
        </AppThemeProviderWrapper>
      </Host>
    </GestureHandlerRootView>
  );
}

export default App;
