import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils/colors';

const Register = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [profession, setProfession] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onContinue = () => {
    console.log('#btn continue');
    console.log('fullName : ' + fullName);
    console.log('profession : ' + profession);
    console.log('email : ' + email);
    console.log('password : ' + password);
    // navigation.navigate('UploadPhoto')
  };

  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Sign Up" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={24} />
          <Input
            label="Full Name"
            value={fullName}
            onChangeText={(value) => setFullName(value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profession}
            onChangeText={(value) => setProfession(value)}
          />
          <Gap height={24} />
          <Input
            label="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
          />
          <Gap height={40} />
          <Button title="Continue" onPress={onContinue} />
          <Gap height={80} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
