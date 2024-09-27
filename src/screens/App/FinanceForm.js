import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FinanceForm = () => {
  const navigation = useNavigation();

  const closeModal = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.modalContainer}>
      <Text>Finans Formu</Text>
      {/* Form elemanlarınızı buraya ekleyin */}
      <Button title="Kapat" onPress={closeModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FinanceForm;
