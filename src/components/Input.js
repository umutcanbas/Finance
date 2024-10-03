import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import EyeOpen from '../assets/svg/eye-fill.svg';
import EyeClose from '../assets/svg/eye-off-fill.svg';

const Input = ({value, onChangeText, placeholder, isSecure = false}) => {
  const [isSecureText, setSecureText] = useState(isSecure);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="black"
        autoCapitalize="none"
        secureTextEntry={isSecureText}
      />
      {isSecure && (
        <TouchableOpacity
          onPress={() => setSecureText(prev => !prev)}
          style={styles.icon}>
          {isSecureText ? (
            <EyeClose width={24} height={24} />
          ) : (
            <EyeOpen width={24} height={24} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    margin: 10,
    paddingHorizontal: 14,
    borderRadius: 45,
    alignItems: 'center',
    backgroundColor: '#f8f8ff',
  },
  input: {
    width: 300,
    color: 'black',
    marginLeft:10
  },
  icon: {
    padding: 5,
  },
});
