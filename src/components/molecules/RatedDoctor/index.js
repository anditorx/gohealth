import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DumDokter1, IconStarFullYellow} from '../../../assets';
import {colors} from '../../../utils/colors';

const RatedDoctor = () => {
  return (
    <View style={styles.container}>
      <Image source={DumDokter1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Dr. Alea Rachel</Text>
        <Text style={styles.category}>Pediartrician</Text>
      </View>
      <View style={styles.rate}>
        <IconStarFullYellow />
        <IconStarFullYellow />
        <IconStarFullYellow />
        <IconStarFullYellow />
        <IconStarFullYellow />
      </View>
    </View>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 17,
    paddingHorizontal: 17,
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
  },
  category: {
    fontSize: 12,
    color: colors.text.primary,
    marginTop: 2,
  },
  profile: {
    flex: 1,
  },
});
