import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DumUser} from '../../../assets';
import {colors} from '../../../utils/colors';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={DumUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Melinda Putri</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 17,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: '900',
    color: colors.text.primary,
  },
  profession: {
    fontSize: 14,
    color: colors.text.secondary,
  },
});
