import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../../components/Button';

import {logOut} from '../../redux/user';
import {useDispatch} from 'react-redux';
import routes from '../../navigation/routes';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());

    navigation.replace(routes.AUTH_NAVIGATOR, {screen: routes.LOGIN});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <CustomButton title="LogOut" onPress={handleLogOut} />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#6495ed'
  }
});
