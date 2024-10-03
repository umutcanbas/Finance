import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const IncomeExpense = () => {
  const moneyStatus = useSelector(state => state.user.moneyStatus);


  const renderItem = ({item}) => {
    const category = item?.category?.toUpperCase() || 'unknown';
    const money = item.money || 'unknown';
    const description = item.description || 'unknown';
    const date = item?.date?.toString().split('T')[0]


    const isIncome = item.type === 'income';
    const moneyStyle = isIncome ? styles.income : styles.expense;

    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemInnerContainer}>
          <Text style={[styles.itemMoney, moneyStyle]}>{money}</Text>
          <Text style={styles.itemText}>{category}</Text>
        </View>

        <View style={styles.itemInnerContainer}>
          <Text style={styles.itemText}>{description}</Text>
          <Text style={styles.itemText}>{date}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Last Income and Expenses</Text>
      </View>
      <FlatList
        data={[...moneyStatus].sort(
          (a, b) => new Date(b.date) - new Date(a.date),
        )}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default IncomeExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  itemContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  itemInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  itemMoney: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  income: {
    color: '#00FF00',
  },
  expense: {
    color: 'red',
  },
});
