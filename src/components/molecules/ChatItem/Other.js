import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils/colors';

const Other = ({text, date, photo}) => {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.imgDoctorChat} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
  },
  chatContent: {
    padding: 10,
    // paddingRight: 18,
    backgroundColor: colors.cardLight,
    // maxWidth: '95%',
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
