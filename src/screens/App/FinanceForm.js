import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

import CustomButton from '../../components/Button';

import {saveFinanceForm} from '../../redux/user';
import {useDispatch} from 'react-redux';

import {useNavigation} from '@react-navigation/native';

const FinanceForm = ({route}) => {
  const selectedType = route.params.type;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [type, setType] = useState(selectedType);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [amountMoney, setAmountMoney] = useState(null);
  const [description, setDescription] = useState('');

  const [category, setCategory] = useState([
    {label: 'Salary', value: 'salary'},
    {label: 'Rent', value: 'rent'},
    {label: 'Surprise', value: 'surprise'},
    {label: 'Subscription', value: 'subscription'},
    {label: 'Food', value: 'food'},
    {label: 'Invoice', value: 'invoice'},
  ]);

  const [dropOpen, setDropOpen] = useState(false);

  const closeModal = () => {
    if (!selectedCategory || !amountMoney || !description) {
      alert('Please fill in all fields: Category, Amount, and Description.');
      return;
    }
    dispatch(
      saveFinanceForm({
        type,
        category: selectedCategory,
        money: amountMoney,
        description,
        date: new Date().toISOString(),
      }),
    );

    navigation.goBack();
  };

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
    <TouchableWithoutFeedback
      style={{flex: 1}}
      onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Finance Form</Text>
        </View>

        <SelectType title="Income" onPress={() => setType('income')} />
        <SelectType title="Expense" onPress={() => setType('expense')} />

        <DropDownPicker
          open={dropOpen}
          value={selectedCategory}
          items={category}
          setOpen={setDropOpen}
          setValue={setSelectedCategory}
          setItems={setCategory}
          containerStyle={styles.dropDownContainer}
        />

        <View style={styles.inputContainer}>
          <TextInput
            value={amountMoney}
            onChangeText={setAmountMoney}
            placeholder="Amount of money"
            keyboardType="numeric"
          />
        </View>

        <View style={[styles.inputContainer, {height: 100}]}>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Description"
          />
        </View>

        <CustomButton title="Done" onPress={closeModal} />
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
    marginBottom: 20,
  },
  dropDownContainer: {
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
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 0.3,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default FinanceForm;
