import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DumUser, ILNullPhoto} from '../../../assets';
import {colors, getData} from '../../../utils';

const HomeProfile = ({onPress}) => {
  // state profile
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    profession: '',
  });

  // getData async storage or localstorage
  useEffect(() => {
    getData('user').then((res) => {
      console.log('data user: ', res);
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(res);
    });
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={profile.photo} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.profession}>{profile.profession}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 17,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: '900',
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  profession: {
    fontSize: 14,
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
