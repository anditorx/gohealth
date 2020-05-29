import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../../utils/colors';
import {Button} from '../../atoms';
import {DumDokter1} from '../../../assets';

const DarkProfile = () => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" />
      <View style={styles.content}>
        <Text style={styles.name}>Dr. Alexander Guerero</Text>
        <Text style={styles.specialist}>Dokter Anak</Text>
      </View>
      <Image source={DumDokter1} style={styles.imgDoctor} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  name: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  specialist: {
    color: colors.text.subTitle,
    fontSize: 14,
    textAlign: 'center',
  },
  imgDoctor: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
