import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DumUser} from '../../../assets';
import {colors} from '../../../utils/colors';

const HomeProfile = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={DumUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Melinda Putri</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
    </TouchableOpacity>
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
