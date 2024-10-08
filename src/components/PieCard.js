import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';

const PieCard = ({data, title}) => {
  const getColorByCategory = {
    rent: '#009FFF',
    invoice: '#93FCF8',
    subscription: '#FFA5BA',
    food: '#FF6347',
    surprise: '#FFD700',
    salary: '#32CD32',
  };

  const pieData = Object.entries(data).map(([category, value]) => ({
    value,
    color: getColorByCategory[category] || '#BDB2FA',
    gradientCenterColor: getColorByCategory[category] || '#BDB2FA',
    label: category,
  }));

  const totalExpense = Object.values(data).reduce(
    (sum, value) => sum + value,
    0,
  );

  const renderLegendComponent = () => {
    return (
      <View style={styles.legendContainer}>
        {Object.keys(data).map((category, index) => (
          <View key={index} style={styles.legendItem}>
            <View
              style={[
                styles.dot,
                {backgroundColor: getColorByCategory[category] || '#BDB2FA'},
              ]}
            />
            <Text style={styles.legendText}>
              {category.charAt(0).toUpperCase() + category.slice(1)}:{' '}
              {data[category]}$
            </Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.chartContainer}>
        <PieChart
          data={pieData}
          donut
          showGradient
          sectionAutoFocus
          radius={90}
          innerRadius={60}
          innerCircleColor="#232B5D"
          centerLabelComponent={() => (
            <View style={styles.centerLabel}>
              <Text style={styles.centerLabelText}>{totalExpense}$</Text>
              <Text style={styles.centerLabelSubText}>Total</Text>
            </View>
          )}
        />
      </View>
      {renderLegendComponent()}
    </View>
  );
};

export default PieCard;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#232B5D',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chartContainer: {
    padding: 20,
    alignItems: 'center',
  },
  centerLabel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerLabelText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  centerLabelSubText: {
    fontSize: 14,
    color: 'white',
  },
  legendContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: 10,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  legendText: {
    color: 'white',
  },
});
