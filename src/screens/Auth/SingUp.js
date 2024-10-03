import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import CustomInput from '../../components/Input';
import CustomButton from '../../components/Button';

import routes from '../../navigation/routes';

import {useDispatch} from 'react-redux';
import {login} from '../../redux/user';

const SingUp = ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRepassword] = useState('');

  const goLogin = () => {
    navigation.goBack(routes.LOGIN);
  };

  const goSingUp = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please enter email ,password and repassword');
      return;
    }
    if (
      email === 'aa@mail.com' &&
      password === '123123' &&
      rePassword === '123123'
    ) {
      dispatch(login({username: email}));
      navigation.replace(routes.APP_NAVIGATOR);
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SingUp</Text>
      </View>
      <CustomInput value={email} onChangeText={setEmail} placeholder="E-mail" />
      <CustomInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />
      <CustomInput
        value={rePassword}
        onChangeText={setRepassword}
        placeholder="RePassword"
      />

      <View style={styles.buttonContainer}>
        <CustomButton title="Go Back" onPress={goLogin} />
        <CustomButton title="SingUp" onPress={goSingUp} />
      </View>
    </SafeAreaView>
  );
};

export default SingUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ed',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 270,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
