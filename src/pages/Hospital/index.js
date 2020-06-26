import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {
  ILCoverHospital,
  DumHospital1,
  DumHospital2,
  DumHospital3,
} from '../../assets';
import {colors, getData, showMessageError} from '../../utils';
import {ListHospital} from '../../components';
import {Fire} from '../../config';

const Hospital = () => {
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    Fire.database()
      .ref('hospitals/')
      .once('value')
      .then((res) => {
        console.log('data: ', res.val());
        if (res.val()) {
          setHospitals(res.val());
        }
      })
      .catch((err) => {
        showMessageError(err.message);
      });
  }, []);
  return (
    <View style={styles.page}>
      <ImageBackground source={ILCoverHospital} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        {hospitals.map((item) => {
          return (
            <ListHospital
              key={item.id}
              picture={item.picture}
              type={item.type}
              name={item.name}
              address={item.address}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Hospital;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 17,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '600',
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 6,
    color: colors.white,
    textAlign: 'center',
  },
});
