import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, Gap, Header, Input, Link} from '../../components';
import {colors} from '../../utils/colors';
import {ILNullPhoto} from '../../assets';
import {IconAddPhoto} from '../../assets';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.txtName}>Lady Rose</Text>
          <Text style={styles.txtProfesion}>Product Designer</Text>
        </View>
        <View>
          <Button title="Upload and Continue" />
          <Gap height={30} />
          <Link title="Skip" size={16} align="center" />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 65,
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  txtName: {
    fontSize: 24,
    color: colors.text.primary,
    textAlign: 'center',
  },
  txtProfesion: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.text.secondary,
  },
});
