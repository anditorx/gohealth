import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Splash} from './pages';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Splash />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
