import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DumUser} from '../../../assets';
import {colors} from '../../../utils/colors';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={DumUser} style={styles.avatar} />
      </View>
      <Text style={styles.name}>Melinda Putri</Text>
      <Text style={styles.profession}>Product Designer</Text>
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
  },
  profession: {
    fontSize: 14,
    color: colors.text.secondary,
  },
});
