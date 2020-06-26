import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, Profile, Gap, Input, Button} from '../../components';
import {getData, colors, storeData} from '../../utils';
import {Fire} from '../../config';
import {showMessage, hideMessage} from 'react-native-flash-message';
import ImagePicker from 'react-native-image-picker';
import {ILNullPhoto} from '../../assets';

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
        showMessage({
          message: 'Password kurang dari 6 karakter.',
          type: 'default',
          position: 'bottom',
          backgroundColor: colors.error,
          color: colors.white,
        });
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
            showMessage({
              message: err.message,
              type: 'default',
              position: 'bottom',
              backgroundColor: colors.error,
              color: colors.white,
            });
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
        showMessage({
          message: 'Success Update Profile',
          description: 'Data has been updated',
          type: 'default',
          position: 'bottom',
          backgroundColor: colors.primary,
          color: colors.white,
        });
      })
      .catch((err) => {
        showMessage({
          message: err.message,
          // description: 'This is our second message',
          type: 'default',
          position: 'bottom',
          backgroundColor: colors.error,
          color: colors.white,
        });
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
          console.log('You are cancelled image');
          showMessage({
            message: 'You are cancelled to upload image',
            type: 'default',
            position: 'bottom',
            backgroundColor: colors.grey2,
            color: colors.grey1,
          });
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
          showMessage({
            message: response.error,
            type: 'default',
            position: 'bottom',
            backgroundColor: colors.error,
            color: colors.white,
          });
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
