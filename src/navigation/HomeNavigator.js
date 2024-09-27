import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import routes from './routes';
import Home from '../screens/App/Home';
import FinanceForm from '../screens/App/FinanceForm';

const Stack = createNativeStackNavigator();

const HomeNavigatior = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen
        name={routes.FINANCE_FORM}
        component={FinanceForm}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigatior;
