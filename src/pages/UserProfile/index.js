import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Profile, List, Gap} from '../../components';
import {colors} from '../../utils/colors';
import {getData} from '../../utils';
import {ILNullPhoto} from '../../assets';

const UserProfile = ({navigation}) => {
  // state profile
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILNullPhoto,
  });
  // get data profile from asyncstorage / localstorage
  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  return (
    <View style={styles.page}>
      <Header title={'Profile'} onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullName.length > 0 && (
        <Profile
          name={profile.fullName}
          desc={profile.profession}
          photo={profile.photo}
        />
      )}

      <Gap height={30} />
      <List
        name="Edit Profile"
        desc="Last update yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Language"
        desc="Available 2 languages"
        type="next"
        icon="edit-profile"
      />
      <List
        name="Give us rate"
        desc="On GooglePlay Store"
        type="next"
        icon="rate"
      />
      <List
        name="Help Center"
        desc="Read our guidelines"
        type="next"
        icon="help-center"
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
