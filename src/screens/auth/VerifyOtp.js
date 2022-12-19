import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

import OtpFields from "../../component/OtpFields";

export default VerifyOtp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>OTP Verification</Text>
        <Text style={styles.subText}>
          Enter the verification code we just sent on {'\n'}your email address.
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    marginHorizontal: 20,
    marginTop: 80,
  },
  header: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 30,
    textAlign: 'left',
    color: colors.black,
  },
  subText: {},
});
