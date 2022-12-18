import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import authRouts from '../route/authRoute';
import Login from '../../../src/screens/auth/Login';

import VerifyOtp from '../../screens/auth/VerifyOtp';
// import verifyOtp from '../../screens/auth/verifyOtp';
import EmailRegistration from '../../screens/auth/EmailRegistration';

const Stack = createNativeStackNavigator();

export default AuthStack = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name={authRouts.verifyOtp}
        component={VerifyOtp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={authRouts.emailRegistration}
        component={EmailRegistration}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={authRouts.login}
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
