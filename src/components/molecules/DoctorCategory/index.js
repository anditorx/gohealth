import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ILDokterUmum, ILPsikiater, ILObat, ILDokterAnak} from '../../../assets';
import {colors} from '../../../utils/colors';

const DoctorCategory = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'dokter umum') {
      return <ILDokterUmum style={styles.illustration} />;
    }
    if (category === 'psikiater') {
      return <ILPsikiater style={styles.illustration} />;
    }
    if (category === 'obat') {
      return <ILObat style={styles.illustration} />;
    }
    if (category === 'dokter anak') {
      return <ILDokterAnak style={styles.illustration} />;
    }
    return <ILDokterUmum style={styles.illustration} />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    // backgroundColor: colors.cardLight,
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
