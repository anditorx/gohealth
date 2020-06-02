import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../components/molecules';
import {colors} from '../../utils/colors';
import {DumDokter1, DumDokter2, DumDokter3} from '../../assets';

const Messages = () => {
  const [doctors] = useState([
    {
      id: 1,
      picture: DumDokter1,
      name: 'Dr. Alea Rachel',
      desc: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      picture: DumDokter2,
      name: 'Dr. Alexander Jannie',
      desc: 'Bisa ibu, nanti bisa di infokan data dir...',
    },
    {
      id: 3,
      picture: DumDokter3,
      name: 'Dr. Jenny Perry',
      desc: 'Sama-sama ibu, terima kasih banyak atas ke...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map((doctor) => {
          return (
            <List
              key={doctor.id}
              picture={doctor.picture}
              name={doctor.name}
              desc={doctor.desc}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 30,
    marginLeft: 17,
    color: colors.text.primary,
  },
});
