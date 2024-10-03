import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FinanceCard from '../../components/FinanceCard';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>FINANCE</Text>

      <FinanceCard/>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ed',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 34,
    color: 'black',
    margin:20
  },
});
