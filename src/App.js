import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Router from './router';
import {Provider} from 'react-redux';

import FlashMessage from 'react-native-flash-message';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.safeAreaView}>
          <Router />
        </SafeAreaView>
      </NavigationContainer>
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
