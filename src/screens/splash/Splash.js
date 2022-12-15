import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";
import { OnboardingContext } from "./context/OnboardingContext.js";


export default Splash = () => {
    const {setLoading} = useContext(OnboardingContext);
    useEffect(() => {
        setTimeout(async () => {
            if(Platform.OS === 'android') {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                    )
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        setLoading(true);
                        alert("You can use the location")
                    } else {
                        alert("Location permission denied")
                    }
                } catch (err) {
                    console.warn(err)
                }
            }
        }, 3000);
    }, []);
    return (
        <View style={styles.container}>
            {/* <Image style={styles.logo} source={require("../assets/logo.png")} /> */}
            <Text style={styles.text}>Loading...</Text>
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

