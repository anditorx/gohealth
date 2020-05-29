import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors} from '../../../utils/colors';
import {Button} from '../../atoms';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Type a message" />
      <Button type="btn-icon-send" />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    maxHeight: 45,
  },
});
