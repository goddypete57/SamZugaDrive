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
import Button from '../../component/Button';
export default Onboarding = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [processing, setProcessing] = useState(false);
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  const canProceed = email.length > 0
&& emailReg.test(email);
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
        title={'Login'}
        onPress={() => {
          loginUser();
        }}
        buttonStyle={styles.createAccountButton}
        processing={processing}
        enabled={canProceed & !processing}
      />
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
    paddingHorizontal: 16,
    borderRadius: 8,

    width: '100%',
    fontSize: 14,
    backgroundColor: colors.border,
    fontFamily: 'Urbanist-Regular',
    marginHorizontal: 20,
    height: 56,
  },
  inputWrapper: {
    marginTop: 21,
  },
});
