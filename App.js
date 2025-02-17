import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HolidaysList from './screens/HolidaysList';
import HolidayDetails from './screens/HolidayDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Holidays" component={HolidaysList} />
          <Stack.Screen name="Details" component={HolidayDetails} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
