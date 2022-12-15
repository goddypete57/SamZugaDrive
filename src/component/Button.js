import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, ActivityIndicator } from 'react-native';
import colors from "../../assets/colors/colors.js";

export default Button = ({ title, onPress, buttonStyle, enabled, textColor, buttonColor, fontSize, processing = false }) => {
    return (
        <TouchableHighlight onPress={() => !processing && enabled ? onPress() : {}}
            underlayColor={colors.inactive}
            style={[buttonStyle,
                StyleSheet.create({
                    justifyContent: 'center',
                    backgroundColor: !processing && enabled ? buttonColor ? buttonColor : colors.primary : colors.inactive
                })]}>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={StyleSheet.create({
                    fontSize: fontSize ? fontSize : 16,
                    textAlign: 'center',
                    fontFamily: "PlusJakartaSans-Regular",
                    color: textColor ? textColor : colors.white,
                })}>{title}</Text>

                {
                    processing &&
                    <ActivityIndicator size="small"
                        color={colors.white}
                        style={{ marginLeft: 10 }} />
                }
            </View>

        </TouchableHighlight>
    );
}