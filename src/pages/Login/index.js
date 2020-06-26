import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {Fire} from '../../config';
import {
  colors,
  showMessageError,
  showMessageSuccess,
  storeData,
  useForm,
} from '../../utils';

const Login = ({navigation}) => {
  // state form input
  const [form, setForm] = useForm({email: '', password: ''});

  // dispatch for change stateGlobal in reducer
  const dispatch = useDispatch();

  const login = () => {
    // change loading in reducer with type and value
    dispatch({type: 'SET_LOADING', value: true});
    // authentication
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        dispatch({type: 'SET_LOADING', value: false});
        showMessageSuccess('Login Success');
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
        dispatch({type: 'SET_LOADING', value: false});
        showMessageError(err.message);
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
