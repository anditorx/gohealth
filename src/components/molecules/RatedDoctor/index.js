import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DumDokter1, IconStarFullYellow} from '../../../assets';
import {colors} from '../../../utils/colors';

const RatedDoctor = ({onPress, name, desc, avatar}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{desc}</Text>
      </View>
      <View style={styles.rate}>
        <IconStarFullYellow />
        <IconStarFullYellow />
        <IconStarFullYellow />
        <IconStarFullYellow />
        <IconStarFullYellow />
      </View>
    </TouchableOpacity>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 17,
    paddingHorizontal: 17,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
    paddingBottom: 17,
  },
  rate: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 16,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  category: {
    fontSize: 12,
    color: colors.text.primary,
    marginTop: 2,
    textTransform: 'capitalize',
  },
  profile: {
    flex: 1,
  },
});
