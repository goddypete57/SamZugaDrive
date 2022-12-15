import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import colors from "../../assets/colors/colors";
import EyeOpen from "../../assets/icons/EyeOpen.svg";
import EyeClose from "../../assets/icons/EyeClosed.svg";
import { useTranslation } from 'react-i18next';



export default PasswordInput = ({ style, fieldStyle, onChangeText = (text) => { }, value, placeholder }) => {
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation();
    return (
        <View style={[styles.passwordWrapper, style]}>
            <TextInput
                style={[styles.passwordInput, fieldStyle]}
                placeholder={placeholder}
                secureTextEntry={!visible}
                value={value} onChangeText={text => onChangeText(text)}
                selectionColor={colors.primary}
                keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
                placeholderTextColor={colors.textLight} />
            <TouchableOpacity onPress={() => { setVisible(!visible) }}>
                {
                    visible ?
                        <Text style={styles.toggleText}>{t('HIDE')}</Text>
                        :
                        <Text style={styles.toggleText}>{t('SHOW')}</Text>
                }
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    passwordWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingVertical: 1,
        paddingHorizontal: 10,
        borderRadius: 8,
        // borderColor: colors.inactive,
        // borderWidth: 1,
        elevation: 1
    },
    passwordInput: {
        fontSize: 16,
        color: colors.black,
        fontFamily: "LexendDeca-Regular",
        flex: 1,
    },
    toggleText: {
        fontSize: 10,
        color: colors.success,
        fontFamily: "LexendDeca-Regular",
    },
});