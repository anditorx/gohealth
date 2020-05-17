import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Splash, GetStarted} from './pages';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <Splash /> */}
      <GetStarted />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
