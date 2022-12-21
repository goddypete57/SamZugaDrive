import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import colors from '../../../assets/colors/colors';
import Button from '../../component/Button';
import OtpFields from '../../component/OtpFields';
import authRoute from '../../navigation/route/authRoute';
export default VerifyOtp = ({navigation}) => {
  const [otp, setOtp] = useState('');
  const canProceed = otp.length == 4;
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>OTP Verification</Text>
        <Text style={styles.subText}>
          Enter the verification code we just sent to {'\n'}your email address.
        </Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputWrapper}>
        <OtpFields
          style={styles.otp}
          nuberOfFields={4}
          value={otp}
          onChangeText={text => {
            setOtp(text);
            if (text.length == 4) {
              // verify(text);
            }
          }}
        />
      </KeyboardAvoidingView>

      <Button
        title={'Verify'}
        onPress={() => {
          loginUser();
        }}
        buttonStyle={styles.createAccountButton}
        enabled={canProceed}
        buttonColor={{backgroundColor: colors.Blue}}
        fontSize={16}
      />
      <View style={styles.loginwrapper}>
        <Text style={styles.lastText}>
        Didn’t received code?
          <Text onpress={()=>{}} style={styles.login}>
          Resend
          </Text>
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
  subText: {
    fontFamily: 'Urbanist-Medium',
    fontSize: 16,
  },
  createAccountButton: {
    borderRadius: 16,
    height: 54,
    marginTop: 149,

    backgroundColor: colors.Blue,
    marginHorizontal: 20,
  },
  login:{
    fontSize:15,
    fontFamily: 'Urbanist-Bold',
    color:colors.Lightgreen,
    textAlign: 'center',
    marginTop:20
  },
  loginwrapper:{alignSelf:'center', marginTop: 24,}
});
