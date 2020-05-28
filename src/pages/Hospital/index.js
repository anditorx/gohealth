import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILCoverHospital} from '../../assets';
import {colors} from '../../utils/colors';
import {ListHospital} from '../../components';

const Hospital = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILCoverHospital} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital />
        <ListHospital />
        <ListHospital />
      </View>
    </View>
  );
};

export default Hospital;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 17,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '600',
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 6,
    color: colors.white,
    textAlign: 'center',
  },
});
