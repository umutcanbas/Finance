import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import {useDispatch} from 'react-redux';
import {login} from '../../redux/user';

import Input from '../../components/Input';
import Button from '../../components/Button';
import routes from '../../navigation/routes';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const goLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    if (email === 'aa@mail.com' && password === '123123') {
      dispatch(login({username: email}));
      navigation.replace(routes.APP_NAVIGATOR);
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  const goSingUp = () => {
    navigation.navigate(routes.SINGUP);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <Input value={email} onChangeText={setEmail} placeholder="E-mail" />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />

      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={goLogin} />
        <Button title="Register" onPress={goSingUp} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
