import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Profile, List} from '../../components';
import {colors} from '../../utils/colors';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title={'Profile'} onPress={() => navigation.goBack()} />
      <Profile />
      <List
        name="Edit Profile"
        desc="Last update yesterday"
        type="next"
        icon="edit-profile"
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
