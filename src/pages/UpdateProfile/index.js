import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, Profile, Gap, Input, Button} from '../../components';
import {colors} from '../../utils/colors';

const UpdateProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemove />
          <Gap height={30} />
          <Input label="Full Name" />
          <Gap height={20} />
          <Input label="Pekerjaan" />
          <Gap height={20} />
          <Input label="Email" />
          <Gap height={20} />
          <Input label="Password" />
          <Gap height={40} />
          <Button title="Save Profile" />
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
