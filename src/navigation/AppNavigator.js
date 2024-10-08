import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import routes from './routes';

import HomeNavigatior from './HomeNavigator';
import Profile from '../screens/App/Profile';

import HomeLine from '../assets/svg/home-line.svg';
import HomeFill from '../assets/svg/home-fill.svg';
import ProfileLine from '../assets/svg/user-line.svg';
import ProfileFill from '../assets/svg/user-fill.svg';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const iconList = {
    home: HomeLine,
    homeFill: HomeFill,
    profile: ProfileLine,
    profileFill: ProfileFill,
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: '#6495ed',
        },

        tabBarIcon: ({focused}) => {
          let Icon;

          if (route.name === routes.HOME_NAVIGATOR) {
            Icon = focused ? iconList?.homeFill : iconList?.home;
          } else if (route.name === routes.PROFILE) {
            Icon = focused ? iconList?.profileFill : iconList?.profile;
          }

          return <Icon width={23} height={23} />;
        },
      })}>
      <Tab.Screen name={routes.HOME_NAVIGATOR} component={HomeNavigatior} />
      <Tab.Screen name={routes.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
