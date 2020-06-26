import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Router from './router';
import {Provider, useSelector} from 'react-redux';

import FlashMessage from 'react-native-flash-message';
import store from './redux/store';
import {Loading} from './components';

const MainApp = () => {
  const stateGlobal = useSelector((state) => state);
  return (
    <>
      <NavigationContainer>
        <SafeAreaView style={styles.safeAreaView}>
          <Router />
        </SafeAreaView>
      </NavigationContainer>
      <FlashMessage position="bottom" />
      {stateGlobal.loading && <Loading />}
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};
export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
