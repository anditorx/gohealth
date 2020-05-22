import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  IconDoctor,
  IconMessages,
  IconHospital,
  IconHospitalActive,
  IconDoctorActive,
  IconMessagesActive,
} from '../../../assets';
import {colors} from '../../../utils/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IconDoctorActive /> : <IconDoctor />;
    }
    if (title === 'Messages') {
      return active ? <IconMessagesActive /> : <IconMessages />;
    }
    if (title === 'Hospitals') {
      return active ? <IconHospitalActive /> : <IconHospital />;
    }
    return <IconDoctorActive />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (active) => ({
    fontSize: 14,
    color: active ? colors.text.menuActive : colors.text.menuInActive,
    fontWeight: '600',
    marginTop: 5,
  }),
});
