import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
// YellowBox.ignoreWarnings(['Remote debugger']);
import {Button, Gap, Header, Input} from '../../components';
import {Fire} from '../../config';
import {colors, showMessageError, storeData, useForm} from '../../utils';

const Register = ({navigation}) => {
  // state form input
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const onContinue = () => {
    console.log('#btn continue');
    console.log('form : ', form);

    dispatch({type: 'SET_LOADING', value: true});
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        dispatch({type: 'SET_LOADING', value: false});
        setForm('reset');
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
          uid: success.user.uid,
        };
        // set data to databse firebase
        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);

        // store data to localstorage
        storeData('user', data);
        console.log('register success : ', success);
        navigation.navigate('UploadPhoto', data);
      })
      .catch((error) => {
        dispatch({type: 'SET_LOADING', value: false});
        const errorMessage = error.message;
        console.log('error register: ', errorMessage);
        showMessageError(errorMessage);
      });
  };

  return (
    <>
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} title="Sign Up" />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Gap height={24} />
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={(value) => setForm('profession', value)}
            />
            <Gap height={24} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
              secureTextEntry={true}
            />
            <Gap height={40} />
            <Button title="Continue" onPress={onContinue} />
            <Gap height={100} />
          </ScrollView>
        </View>
      </View>
    </>
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
