import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import colors from "../../assets/colors/colors";

export default OtpFields = ({ nuberOfFields, style, fieldStyle, onChangeText = (text) => { }, value }) => {
    const otpFields = [];
    const refsFocus = useRef(null);

    for (var t = 0; t < nuberOfFields; t++) {
        otpFields.push(
            <TouchableOpacity
                onPress={() => { refsFocus.current.focus() }}
                key={t} >
                <View
                    style={[styles.otpField, {
                        borderColor: value[t] ? colors.primary : colors.inactive,
                    }]}>
                    <Text style={[styles.otpText, fieldStyle]}>{value[t]}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <>
        <View style={[styles.otpWraper, style]} >
            {otpFields}

        </View>
        <TextInput ref={refsFocus}
            keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
            value={value}
            selectionColor={'transparent'}
            style={{color: 'transparent', fontSize: 0, height: 0, width: 0}}
            onChangeText={text => {
                console.log(text);
                onChangeText(text.length <= nuberOfFields ? text.replace(/[^0-9]/g, "") : value);
            }} />
    </>
    );
}


const styles = StyleSheet.create({
    otpWraper: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        width: "100%"
    },
    otpField: {
        width: 50,
        height: 50,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        marginHorizontal: 6
    },
    otpText: {
        fontSize: 16,
        color: colors.primary,
        fontFamily: "LexendDeca-Regular",
    },
})