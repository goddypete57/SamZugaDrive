import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import Splash from "./src/screens/splash/Splash";
import { OnboardingContext } from "./context/OnboardingContext.js";
import { AuthContext, AuthContextProvider } from "./context/AuthContext.js";
import { OnboardingContextProvider } from "./context/OnboardingContext.js";
import OnboardingScene from "./src/screens/onboarding/OnboardingScene";
import AuthStack from "./src/navigation/stacks/AuthStack"
import MainStack from "./src/navigation/stacks/MainStack"

const RootNavigator = () => {
  const { isOnboard } = useContext(OnboardingContext);
  const { token } = useContext(AuthContext)
  const [isLoading, setLoading] = useState(true);
  useEffect(() => { setTimeout(() => setLoading(false), 3000) });
  return (
    <>
      <NavigationContainer>
        {
          isLoading ? <Splash /> :
            isOnboard ? token != null ? <MainStack /> :
              <AuthStack /> : <OnboardingScene />}
      </NavigationContainer>
      <Toast />
    </>
  )
}
export default function App() {
  if (Platform.OS == 'ios') {
    StatusBar.setBarStyle('light-content', true);	//<<--- add this
  }
  return (
    <OnboardingContextProvider>
      <StatusBar backgroundColor={"#000"} />
      <AuthContextProvider>
        <RootNavigator />
      </AuthContextProvider>
    </OnboardingContextProvider>
  );
}