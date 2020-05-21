import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../../utils/colors';

const Button = ({type, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container(type)}>
        <Text style={styles.text(type)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 17,
    borderRadius: 30,
  }),
  text: (type) => ({
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    // fontFamily: 'Nunito-SemiBold',
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  }),
});
