import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from './Button';

import {useNavigation} from '@react-navigation/native';
import routes from '../navigation/routes';
const FinanceCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>money:</Text>
        <Text style={styles.headerText}>cok para</Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="+"
          onPress={() => navigation.navigate(routes.FINANCE_FORM)}
        />
        <CustomButton
          title="-"
          onPress={() => navigation.navigate(routes.FINANCE_FORM)}
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
    backgroundColor: 'grey',
    borderRadius: 30,
    marginVertical: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 14,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
