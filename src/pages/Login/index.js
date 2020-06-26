import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ILLogo} from '../../assets';
import {Input, Link, Button, Gap, Loading} from '../../components';
import {colors, useForm, storeData} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';

const Login = ({navigation}) => {
  // state form input
  const [form, setForm] = useForm({email: '', password: ''});
  // state loading
  const [loading, setLoading] = useState(false);

  const login = () => {
    console.log('form', form);
    setLoading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        setLoading(false);
        console.log('success : ', res);
        showMessage({
          message: 'Login Success',
          description: "Just wait a minute. We will try to get you're data.",
          type: 'default',
          position: 'bottom',
          backgroundColor: colors.primary,
          color: colors.white,
        });
        // get data from db firebase
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDB) => {
            console.log('data user : ', resDB.val());
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log('error : ', err);
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
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={40} />
          <ILLogo />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
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
            secureTextEntry
          />
          <Gap height={10} />
          <Link title="Forgot my password" size={12} />
          <Gap height={40} />
          <Button title="Sign In" onPress={login} />
          <Gap height={30} />
          <Link
            title="Create new account"
            size={16}
            align="center"
            onPress={() => navigation.navigate('Register')}
          />
          <Gap height={30} />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: colors.black,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 158,
  },
});
