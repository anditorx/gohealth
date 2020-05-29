import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../../utils/colors';
import {DumDokter1} from '../../../assets';

const IsMe = () => {
  return (
    <View style={styles.container}>
      <Image source={DumDokter1} style={styles.imgDoctorChat} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>
            Jeruk bagus, untuk meningkatkan vitamin c pada tubuh
          </Text>
        </View>
        <Text style={styles.date}>04.20 AM</Text>
      </View>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.cardLight,
    maxWidth: '85%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    color: colors.text.primary,
  },
  date: {
    fontSize: 11,
    color: colors.text.secondary,
    marginTop: 3,
  },
  imgDoctorChat: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
});
