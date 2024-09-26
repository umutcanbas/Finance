import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';

import Home from '../screens/App/Home';
import Profile from '../screens/App/Profile';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen name={routes.PROFILE} component={Profile} />
    {/*   <Stack.Screen
        name={routes.DAILY_FORM}
        component={DailyForm}
        options={{presentation: 'modal', gestureEnabled: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;