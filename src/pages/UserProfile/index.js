import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, Profile, List, Gap} from '../../components';
import {colors} from '../../utils/colors';
import {getData} from '../../utils';
import {ILNullPhoto} from '../../assets';
import {Fire} from '../../config';
import {showMessage, hideMessage} from 'react-native-flash-message';

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

  const signout = () => {
    Fire.auth()
      .signOut()
      .then((res) => {
        console.log('sukses sign out');
        navigation.replace('GetStarted');
      })
      .catch((err) => {
        showMessage({
          message: err.message,
          type: 'default',
          position: 'bottom',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title={'Profile'} onPress={() => navigation.goBack()} />
        <Gap height={10} />
        {profile.fullName.length > 0 && (
          <Profile
            name={profile.fullName}
            desc={profile.profession}
            photo={profile.photo.uri === '' ? ILNullPhoto : profile.photo}
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
        <List
          name="Log out"
          desc="Last update Yesterday"
          type="next"
          icon="help-center"
          onPress={signout}
        />
        <Gap height={50} />
      </ScrollView>
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
