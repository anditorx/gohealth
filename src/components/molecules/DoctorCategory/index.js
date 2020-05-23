import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILDokterUmum} from '../../../assets';
import {colors} from '../../../utils/colors';

const DoctorCategory = () => {
  return (
    <View style={styles.container}>
      <ILDokterUmum style={styles.illustration} />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>Dokter Umum</Text>
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  illustration: {
    marginBottom: 30,
  },
  label: {
    fontSize: 12,
    fontWeight: '300',
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.text.primary,
  },
});
