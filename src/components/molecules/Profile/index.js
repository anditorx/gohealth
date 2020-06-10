import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DumUser, IconRemovePhoto} from '../../../assets';
import {colors} from '../../../utils/colors';

const Profile = ({name, desc}) => {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={DumUser} style={styles.avatar} />
        <IconRemovePhoto style={styles.remove} />
      </View>
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center',
  },
  profession: {
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  remove: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
});
