import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = ({value, onChangeText, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="black"
        autoCapitalize='none'
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    height: 40,
    margin: 10,
    padding: 10,
    borderRadius: 45,
    alignItems: 'center',
    backgroundColor: '#f8f8ff',
  },
  input: {
    width: 300,
  },
});
