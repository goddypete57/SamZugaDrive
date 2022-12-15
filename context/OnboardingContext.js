import React, {createContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const OnboardingContext = createContext();


export const OnboardingContextProvider = ({children}) => {
    const [isOnboard, setOnboard] = useState(false);

    const onboardingDone = () => {
        setOnboard(true);
        AsyncStorage.setItem('onBoarded', JSON.stringify(true));
    }

    const isOnboarded = async() => {
        try {
            let isOnboard = await AsyncStorage.getItem('onBoarded');
            setOnboard(isOnboard);
        } catch (error) {
            console.log('isOnboarded error: $(error)');
        }
    }

    useEffect(() => {
        isOnboarded();
    }, []);
    return (
        <OnboardingContext.Provider value={{ isOnboard, onboardingDone}}>
            {children}
        </OnboardingContext.Provider>
    );
}