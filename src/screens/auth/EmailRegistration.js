import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import colors from '../../../assets/colors/colors';
import Button from '../../component/Button';
export default Onboarding = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [processing, setProcessing] = useState(false);
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  const canProceed = email.length > 0 && emailReg.test(email);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Welcome to{'\n'}Samzugadrive,{'\n'}
        let’s get you started!
      </Text>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputWrapper}>
        <TextInput
          style={styles.emailInput}
          placeholder={'Enter your email'}
          value={email}
          onChangeText={text => setEmail(text)}
          selectionColor={colors.primary}
          placeholderTextColor={colors.textLight}
        />
      </KeyboardAvoidingView>

      <Button
        title={'next'}
        onPress={() => {
          loginUser();
        }}
        buttonStyle={styles.createAccountButton}
        processing={processing}
        enabled={canProceed & !processing}
        buttonColor={{backgroundColor: colors.Blue}}
      />
<View style={styles.loginwrapper}>
<Text style={styles.lastText}>
        Already have an account?
        <Text onpress={{}} style={styles.login}>Login Now</Text>
      </Text>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },

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
  createAccountButton: {
    borderRadius: 16,
    height: 54,
    marginTop: 156,
    paddingHorizontal: 10,
    backgroundColor: colors.Blue,
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
    fontFamily: 'Urbanist-Bold',
    color:colors.Lightgreen,
    textAlign: 'center',
    marginTop:20
  },
  loginwrapper:{alignSelf:'center', marginTop: 24,}
});
