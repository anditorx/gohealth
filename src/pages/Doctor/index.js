import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
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
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <HomeProfile />
          <Gap height={30} />
          <Text style={styles.welcomeTxt}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
          <Gap height={20} />
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap height={16} />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <Gap height={6} />
              </View>
            </ScrollView>
          </View>
          <Text style={styles.selectionLabel}>Top Rated Doctors</Text>
          <RatedDoctor />
          <RatedDoctor />
          <RatedDoctor />
          <Text style={styles.selectionLabel}>Good News</Text>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  welcomeTxt: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text.primary,
    maxWidth: 250,
    paddingHorizontal: 17,
  },
  category: {
    flexDirection: 'row',
    marginLeft: 34,
    marginRight: 25,
  },
  wrapperScroll: {
    marginHorizontal: -17,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  selectionLabel: {
    fontSize: 16,
    fontWeight: '800',
    marginTop: 30,
    marginBottom: 10,
    paddingHorizontal: 17,
  },
});
