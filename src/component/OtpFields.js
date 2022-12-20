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
                        borderColor: value[t] ? colors.Lightgreen : colors.inactive,
                        borderWidth: value[t] ? 1:null,
                        backgroundColor:colors.gray
                        
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

        width: "100%",
        marginTop:36
    },
    otpField: {
        width: 67.25,
        height: 60,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 14.33
    },
    otpText: {
        fontSize: 22,
        color: colors.black,
        fontFamily: "LexendDeca-Bold",
    },
})