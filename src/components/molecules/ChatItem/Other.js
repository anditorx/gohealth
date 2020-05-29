import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils/colors';

const Other = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>
          Ibu Dr, apakah memakan jeruk tiap hari itu buruk?
        </Text>
      </View>
      <Text style={styles.date}>04.20 AM</Text>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.disable,
    maxWidth: '85%',
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  text: {
    fontSize: 14,
    color: colors.text.primary,
  },
  date: {
    fontSize: 11,
    color: colors.text.secondary,
    marginTop: 3,
  },
});
