import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FinanceCard from '../../components/FinanceCard';
import IncomeExpense from '../../components/IncomeExpense';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>FINANCE</Text>

      <FinanceCard />
      <IncomeExpense />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ed',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 34,
    color: 'black',
    margin: 20,
    marginHorizontal: 120,
  },
});
