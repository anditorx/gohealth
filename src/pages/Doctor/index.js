import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {DumDokter1, DumDokter2, DumDokter3} from '../../assets';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {Fire} from '../../config';
import {colors, showMessageError} from '../../utils';

const Doctor = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    getNews();
    getCategoryDoctor();
    getTopRatedDoctor();
  }, []);

  const getNews = () => {
    Fire.database()
      .ref('news/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter((el) => el !== null);
          setNews(filterData);
        }
      })
      .catch((err) => {
        showMessageError(err.message);
      });
  };

  const getCategoryDoctor = () => {
    Fire.database()
      .ref('category_doctor/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter((el) => el !== null);
          setCategoryDoctor(filterData);
        }
      })
      .catch((err) => {
        showMessageError(err.message);
      });
  };

  const getTopRatedDoctor = () => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          // maksud Object.keys(listObj) = listObj nya kita jadikan array
          Object.keys(oldData).map((key) => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setDoctors(data);
        }
      })
      .catch((err) => {
        showMessageError(err.message);
      });
  };

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
                {categoryDoctor.map((item) => {
                  return (
                    <DoctorCategory
                      key={item.id}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor', item)}
                    />
                  );
                })}
                <Gap height={6} />
              </View>
            </ScrollView>
          </View>
          <Text style={styles.selectionLabel}>Top Rated Doctors</Text>
          {doctors.map((doctorList) => {
            return (
              <RatedDoctor
                key={doctorList.id}
                name={doctorList.data.fullName}
                desc={doctorList.data.profession}
                avatar={{uri: doctorList.data.photo}}
                onPress={() => navigation.navigate('DoctorProfile', doctorList)}
              />
            );
          })}
          <Text style={styles.selectionLabel}>Good News</Text>
          {news.map((item) => {
            return (
              <NewsItem
                key={item.id}
                title={item.title}
                date={item.date}
                image={item.image}
              />
            );
          })}
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
    marginBottom: 5,
    paddingHorizontal: 17,
  },
});
