import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBackDark} from '../../../assets';
import {Gap} from '../../atoms';
import {colors} from '../../../utils/colors';

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <IconBackDark />
      <Text style={styles.title}>Sign Up</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    backgroundColor: 'white',
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: colors.text.primary,
  },
});
