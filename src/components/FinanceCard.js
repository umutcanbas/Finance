import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from './Button';

import {useNavigation} from '@react-navigation/native';
import routes from '../navigation/routes';

import {useSelector} from 'react-redux';

const FinanceCard = () => {
  const navigation = useNavigation();

  const moneyStatus = useSelector(state => state.user.moneyStatus);

  const totalIncome = moneyStatus
    .filter(item => item.type == 'income')
    .reduce((acc, cur) => Number(acc) + Number(cur.money), 0);

  const totalExpense = moneyStatus
    .filter(item => item.type == 'expense')
    .reduce((acc, cur) => Number(acc) + Number(cur.money), 0);

  const totalMoney = totalIncome - totalExpense;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Total Finances:</Text>
        <Text style={styles.headerMoney}>{totalMoney}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          icon="+"
          onPress={() =>
            navigation.navigate(routes.FINANCE_FORM, {type: 'income'})
          }
        />
        <CustomButton
          icon="-"
          onPress={() =>
            navigation.navigate(routes.FINANCE_FORM, {type: 'expense'})
          }
        />
      </View>
    </View>
  );
};

export default FinanceCard;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 30,
    marginVertical: 10,
    marginHorizontal: 45,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
    marginHorizontal: 10,
  },
  headerMoney: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
