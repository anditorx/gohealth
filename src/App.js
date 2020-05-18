import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeAreaView}>
        <Router />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
