import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React, {useEffect} from 'react';

import routes from '../../navigation/routes';

import {useSelector} from 'react-redux';

const SplashScreen = ({navigation}) => {
  const {isLogged} = useSelector(state => state.user);

  useEffect(() => {
    if (isLogged) {
      navigation.replace(routes.APP_NAVIGATOR);
    } else {
      navigation.replace(routes.LOGIN);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Finance</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'white',
  },
});
