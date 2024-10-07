import React, {useMemo} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {logOut} from '../../redux/user';
import routes from '../../navigation/routes';

import PieCard from '../../components/PieCard';
import LogOutLogo from '../../assets/svg/logout-box.svg';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const moneyStatus = useSelector(state => state.user.moneyStatus);

  const expenseData = useMemo(() => {
    return moneyStatus
      .filter(item => item.type === 'expense')
      .reduce((acc, item) => {
        const category = item.category;
        const money = parseFloat(item.money);

        if (!acc[category]) {
          acc[category] = 0;
        }
        acc[category] += money;

        return acc;
      }, {});
  }, [moneyStatus]);

  const incomeData = useMemo(() => {
    return moneyStatus
      .filter(item => item.type === 'income')
      .reduce((acc, item) => {
        const category = item.category;
        const money = parseFloat(item.money);

        if (!acc[category]) {
          acc[category] = 0;
        }
        acc[category] += money;

        return acc;
      }, {});
  }, [moneyStatus]);

  console.log(expenseData ? 'a' : 'b');

  const handleLogOut = () => {
    dispatch(logOut());
    navigation.replace(routes.AUTH_NAVIGATOR, {screen: routes.LOGIN});
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Profile</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogOut}>
          <LogOutLogo width={30} height={30} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.innerContainer}>
        {Object.keys(expenseData).length > 0 ? (
          <PieCard data={expenseData} title="Expense" />
        ) : null}
        
        {Object.keys(incomeData).length > 0 ? (
          <PieCard data={incomeData} title="Income" />
        ) : null}
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ed',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 34,
    color: 'white',
    marginLeft: 120,
  },
  button: {
    marginLeft: 100,
  },
  innerContainer: {
    flexGrow: 1,
    minHeight: '100%',
  },
});
