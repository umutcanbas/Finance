import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomButton = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity  activeOpacity={0.8} style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#f8f8ff',
    width: 120,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 45,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
