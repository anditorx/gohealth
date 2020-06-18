import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Router from './router';

import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <SafeAreaView style={styles.safeAreaView}>
          <Router />
        </SafeAreaView>
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
