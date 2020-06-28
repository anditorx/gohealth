import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../../utils/colors';
import {Button} from '../../atoms';
import {DumDokter1} from '../../../assets';

const DarkProfile = ({onPress, title, desc, photo}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.specialist}>{desc}</Text>
      </View>
      <Image source={photo} style={styles.imgDoctor} />
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
    textTransform: 'capitalize',
  },
  specialist: {
    color: colors.text.subTitle,
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  imgDoctor: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
