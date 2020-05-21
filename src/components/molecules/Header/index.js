import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils/colors';
import {Button, Gap} from '../../atoms';

const Header = ({onPress, title}) => {
  return (
    <View style={styles.wrapper}>
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.title}>{title}</Text>
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
