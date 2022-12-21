import React, {useState, useEffect, useContext} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import colors from '../../../assets/colors/colors';
export default Registration = ({navigation}) => {
  const [fulname, setFulname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const canProceed = fulname.length > 0 && phoneNumber>0;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hi, set your account!</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputWrapper}>
        <TextInput
          style={styles.emailInput}
          placeholder={'Full name '}
          value={fulname}
          onChangeText={text => setFulname(text)}
          selectionColor={colors.primary}
          placeholderTextColor={colors.textLight}
        />
      </KeyboardAvoidingView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputWrapper}>
        <TextInput
          style={styles.emailInput}
          placeholder={'Phone number '}
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          selectionColor={colors.primary}
          placeholderTextColor={colors.textLight}
        />
      </KeyboardAvoidingView>

      <View style={styles.loginwrapper}>
        <Text style={styles.lastText}>
        By registering you agree to our 
          <Text onpress={{}} style={styles.login}>
          Terms & {'\n'}Conditions{" "}
          </Text>
          <Text>
            and{" "}
          </Text>
          <Text onpress={{}} style={styles.login}>
          Privacy Policy
          </Text>
        </Text>
      </View>

      <Button
        title={'Register'}
        onPress={() => {
          loginUser();
        }}
        buttonStyle={styles.createAccountButton}
        enabled={canProceed}
        buttonColor={{backgroundColor: colors.Blue}}
        fontSize={16}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 30,
    textAlign: 'left',
    color: colors.black,
    marginTop: 80,
    marginHorizontal: 20,
  },

  emailInput: {
    paddingLeft: 10,
    borderRadius: 8,
    width: '100%',
    fontSize: 14,
    backgroundColor: colors.border,
    fontFamily: 'Urbanist-Regular',
    height: 56,
  },
  inputWrapper: {
    marginTop: 21,
    marginHorizontal: 20,
  },
  lastText: {
    textAlign: 'center',

    fontSize:15,
    fontFamily: 'Urbanist-Medium',
    color:colors.black,
    
  },
  login:{
    fontSize:15,
    fontFamily: 'Urbanist-Regular',
    color:colors.Lightgreen,
    textAlign: 'center',
    marginTop:20
  },
  loginwrapper:{alignSelf:'center', marginTop: 88,},
  createAccountButton: {
    borderRadius: 16,
    height: 54,
    marginTop: 32,

    backgroundColor: colors.Blue,
    marginHorizontal: 20,
  },
});
