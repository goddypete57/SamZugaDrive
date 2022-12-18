import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../../../assets/colors/colors';


export default Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to{'\n'}Samzugadrive,{'\n'} 
let’s get you started!</Text>
    </View>
  )
}

const styles= StyleSheet.create({
container:{
    backgroundColor:colors.white,

},

header:{
    fontFamily:'Urbanist-Bold', 
    fontSize:30,
    textAlign:'left',
    color:colors.black,
    marginTop:80

},

})