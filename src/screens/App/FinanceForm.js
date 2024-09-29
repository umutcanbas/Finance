import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

const FinanceForm = () => {
  const [type, setType] = useState('income');
  const [spendValue, setSpendValue] = useState(null);
  const [spendType, setSpendType] = useState([
    {label: 'Income', value: 'income'},
    {label: 'Monthly', value: 'monthly'},
    {label: 'Installments', value: 'installments'},
    {label: 'Casual', value: 'casual'},
  ]);
  const [open, setOpen] = useState(false);

  const SelectType = ({title, onPress}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.selectTypeButton}
        onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
        <View style={styles.circle}>
          {type == title.toLowerCase() && (
            <View style={styles.selectedCircle} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Finance Form</Text>
      </View>

      <DropDownPicker
        open={open}
        value={spendValue}
        items={spendType}
        setOpen={setOpen}
        setValue={setSpendValue}
        setItems={setSpendType}
        containerStyle={styles.dropDownContainer}
      />

      <SelectType title="Income" onPress={() => setType('income')} />
      <SelectType title="Expense" onPress={() => setType('expense')} />

      <View>
        <Text>Para</Text>
      </View>

      <View>
        <Text>tarhi</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ed',
    padding: 20,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 27,
    color: 'white',
  },
  dropDownContainer: {
    marginTop: 20,
  },
  selectTypeButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 0.3,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
  },
  circle: {
    width: 23,
    height: 23,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCircle: {
    width: 16,
    height: 16,
    borderRadius: 16,
    backgroundColor: 'green',
    margin: 8,
  },
});

export default FinanceForm;
