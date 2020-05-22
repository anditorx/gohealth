import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  HomeProfile,
  DoctorCategory,
  RatedDoctor,
  NewsItem,
  Gap,
} from '../../components';
import {colors} from '../../utils/colors';

const Doctor = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <Gap height={30} />
      <Text style={styles.welcomeTxt}>
        Mau konsultasi dengan siapa hari ini?
      </Text>
      <Gap height={20} />
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <Text>Top Rated Doctors</Text>
      <RatedDoctor />
      <RatedDoctor />
      <RatedDoctor />
      <Text>Good News</Text>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    paddingVertical: 30,
    paddingHorizontal: 17,
  },
  welcomeTxt: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text.primary,
    maxWidth: 210,
  },
});
