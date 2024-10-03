import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Finance from '../../components/Finance';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>FINANCE</Text>

      <Finance/>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8dc',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 34,
    color: 'black',
    margin:20
  },
});
