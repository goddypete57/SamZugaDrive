import React, { useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, Platform, PermissionsAndroid, BackHandler } from "react-native";
import { OnboardingContext } from "../../../context/OnboardingContext.js";


export default Splash = () => {
    const { setLoading } = useContext(OnboardingContext);
    useEffect(() => {
        setTimeout(async () => {
            if (Platform.OS === 'android') {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                    )
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        setLoading(false);
                    } else {
                        BackHandler.exitApp()
                    }
                } catch (err) {
                    console.warn(err)
                }
            }
        }, 3000);
    }, []);
    return (
        <View style={styles.container}>
            <Image style={{
                resizeMode: "cover",
                width: "100%",
                height: "100%",
            }} source={require("../../../assets/images/splash.png")} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
    },
});

