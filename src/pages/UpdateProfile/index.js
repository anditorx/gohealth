import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {Fire} from '../../config';
import {
  colors,
  getData,
  showMessageError,
  showMessageSuccess,
  storeData,
} from '../../utils';

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
  });

  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      setPhoto({uri: res.photo});
      setProfile(data);
    });
  }, []);

  const update = () => {
    console.log(profile);

    // cek password
    console.log('new password : ', password);
    if (password.length > 0) {
      if (password.length < 6) {
        showMessageError('Gunakan password minimal 6 karakter.');
      } else {
        // update password and update profile data to db
        updatePassword();
        updateProfilData();
        navigation.replace('MainApp');
      }
    } else {
      // update profile data to db
      updateProfilData();
      navigation.replace('MainApp');
    }
  };

  const updatePassword = () => {
    Fire.auth().onAuthStateChanged((user) => {
      // cek ada usernya atau tidak
      if (user) {
        // update password
        user
          .updatePassword(password)
          // jika gagal
          .catch((err) => {
            showMessageError(err.message);
          });
      }
    });
  };

  const updateProfilData = () => {
    // add data photo
    const data = profile;
    data.photo = photoForDB;

    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        console.log('success! - save to localstorage: ', data);
        storeData('user', data);
        showMessageSuccess('Success Update Profile');
      })
      .catch((err) => {
        showMessageError(err.message);
      });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    ImagePicker.showImagePicker(
      {quality: 0.3, maxWidth: 350, maxHeight: 350},
      (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          showMessageError('You are cancelled image');
        } else if (response.error) {
          showMessageError(response.error);
        } else {
          // setPhoto
          const source = {uri: response.uri};
          setPhotoForDB(`data: ${response.type};base64, ${response.data}`);

          setPhoto(source);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemove photo={photo} onPress={getImage} />
          <Gap height={30} />
          <Input
            label="Full Name"
            value={profile.fullName}
            onChangeText={(value) => changeText('fullName', value)}
          />
          <Gap height={20} />
          <Input
            label="Pekerjaan"
            value={profile.profession}
            onChangeText={(value) => changeText('profession', value)}
          />
          <Gap height={20} />
          <Input label="Email" value={profile.email} disable />
          <Gap height={20} />
          <Input
            label="Password"
            secureTextEntry
            value={profile.password}
            onChangeText={(value) => setPassword(value)}
          />
          <Gap height={40} />
          <Button title="Save Profile" onPress={update} />
          <Gap height={50} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingLeft: 40,
    paddingRight: 40,
  },
});
