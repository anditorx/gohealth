import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Button, Gap, Header, Input, Link} from '../../components';
import {colors} from '../../utils/colors';
import {ILNullPhoto, IconAddPhoto, IconRemovePhoto} from '../../assets';
import ImagePicker from 'react-native-image-picker';
import {Fire} from '../../config';
import {showMessage, hideMessage} from 'react-native-flash-message';

const UploadPhoto = ({navigation, route}) => {
  console.log('route : ', route);
  // const {fullName, profession, email, uid} = route.params;
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoForDB, setPhotoForDB] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);

  const getImageFromGallery = () => {
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
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          const source = {uri: response.uri};
          setPhotoForDB(`data: ${response.type};base64, ${response.data}`);

          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const uploadAndContinue = () => {
    Fire.database()
      .ref('users/' + uid + '/')
      .update({photo: photoForDB});

    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity
            style={styles.avatarWrapper}
            onPress={getImageFromGallery}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.txtName}>nama</Text>
          <Text style={styles.txtProfesion}>profesi</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={uploadAndContinue}
          />
          <Gap height={30} />
          <Link
            title="Skip"
            size={16}
            align="center"
            onPress={() => navigation.replace('MainApp')}
          />
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
    borderRadius: 110 / 2,
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
