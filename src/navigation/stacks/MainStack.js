import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import colors from '../../../assets/colors/colors';
import authRoute from '../route/authRoute';
import mainRoute from '../route/mainRoute';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';



const Stack = createNativeStackNavigator();
const NavStack = createNativeStackNavigator();


export default MainStack = (route, navigation) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={mainRoute.home} component={GetHelp} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
