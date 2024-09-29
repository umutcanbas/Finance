import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';

const FinanceForm = () => {
  const [type, setType] = useState('income');
  const [spendValue, setSpendValue] = useState(null);
  const [spendType, setSpendType] = useState([
    {label: 'Income', value: 'income'},
    {label: 'Monthly', value: 'monthly'},
    {label: 'Installments', value: 'installments'},
    {label: 'Casual', value: 'casual'},
  ]);
  const [amountMoney, setAmountMoney] = useState(null);
  const [dropOpen, setDropOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [date, setDate] = useState(new Date());

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

  const SelectAmountMoney = ({value, onChange, placeholder}) => {
    return (
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="grey"
        value={value}
        onChange={onChange}
        keyboardType="numeric"
      />
    );
  };

  return (
    <TouchableWithoutFeedback
      style={{flex: 1}}
      onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Finance Form</Text>
        </View>

        <DropDownPicker
          open={dropOpen}
          value={spendValue}
          items={spendType}
          setOpen={setDropOpen}
          setValue={setSpendValue}
          setItems={setSpendType}
          containerStyle={styles.dropDownContainer}
        />

        <SelectType title="Income" onPress={() => setType('income')} />
        <SelectType title="Expense" onPress={() => setType('expense')} />

        <View style={styles.inputContainer}>
          <SelectAmountMoney
            value={amountMoney}
            onChange={setAmountMoney}
            placeholder="Amount of money"
          />
        </View>

        <View style={styles.dateContainer}>
          <Button title="Open" onPress={() => setDateOpen(true)} />
          <DatePicker
            modal
            mode="date"
            open={dateOpen}
            date={date}
            onConfirm={date => {
              setDateOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setDate(false);
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    marginBottom: 10,
  },
  selectTypeButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 0.3,
    borderColor: 'black',
  },
  buttonText: {
    fontWeight: '400',
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
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 0.3,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateContainer: {},
});

export default FinanceForm;
