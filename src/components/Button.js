import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import PlusIcon from '../assets/svg/plus.svg';
import MinusIcon from '../assets/svg/minus.svg';

const CustomButton = ({title, onPress, icon}) => {
  const renderIcon = {
    '+': <PlusIcon width={23} height={23} />,
    '-': <MinusIcon width={23} height={23} />,
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={onPress}>
        {title ? (
          <Text style={styles.buttonText}>{title}</Text>
        ) : (
          renderIcon[icon]
        )}
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
    backgroundColor: '#e0e0ee',
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
