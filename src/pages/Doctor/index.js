import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  HomeProfile,
  DoctorCategory,
  RatedDoctor,
  NewsItem,
  Gap,
} from '../../components';
import {colors, getData} from '../../utils';
import {
  JSONCategoryDoctor,
  DumDokter1,
  DumDokter2,
  DumDokter3,
} from '../../assets';

const Doctor = ({navigation}) => {
  useEffect(() => {
    getData('user').then((res) => {
      console.log('doctor page | getData user', res);
    });
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
          <Gap height={30} />
          <Text style={styles.welcomeTxt}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
          <Gap height={20} />
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap height={16} />
                {JSONCategoryDoctor.data.map((item) => {
                  // console.log('item', item);
                  return (
                    <DoctorCategory
                      key={item.id}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor')}
                    />
                  );
                })}
                <Gap height={6} />
              </View>
            </ScrollView>
          </View>
          <Text style={styles.selectionLabel}>Top Rated Doctors</Text>
          <RatedDoctor
            name={'Dr. Jehan Rasyid'}
            desc={'Dokter Anak'}
            avatar={DumDokter1}
            onPress={() => navigation.navigate('DoctorProfile')}
          />
          <RatedDoctor
            name={'Dr. Rini Makie'}
            desc={'Pedistrian'}
            avatar={DumDokter2}
            onPress={() => navigation.navigate('DoctorProfile')}
          />
          <RatedDoctor
            name={'Dr. Donita Nasir'}
            desc={'Pedistrian'}
            avatar={DumDokter3}
            onPress={() => navigation.navigate('DoctorProfile')}
          />
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
