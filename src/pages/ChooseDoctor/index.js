import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, List} from '../../components';
import {DumDokter4} from '../../assets';
import {colors} from '../../utils/colors';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <List
        type="next"
        picture={DumDokter4}
        name={'Alexander Guerero'}
        desc={'Wanita'}
        onPress={() => navigation.navigate('Chat')}
      />
      <List
        type="next"
        picture={DumDokter4}
        name={'Alexander Guerero'}
        desc={'Wanita'}
      />
      <List
        type="next"
        picture={DumDokter4}
        name={'Alexander Guerero'}
        desc={'Wanita'}
      />
      <List
        type="next"
        picture={DumDokter4}
        name={'Alexander Guerero'}
        desc={'Wanita'}
      />
      <List
        type="next"
        picture={DumDokter4}
        name={'Alexander Guerero'}
        desc={'Wanita'}
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
