import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = ({type, title}) => {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
    paddingVertical: 17,
    borderRadius: 30,
  }),
  text: (type) => ({
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    // fontFamily: 'Nunito-SemiBold',
    color: type === 'secondary' ? 'grey' : 'white',
  }),
});
