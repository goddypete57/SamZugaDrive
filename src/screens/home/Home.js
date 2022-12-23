import React, {useContext, useState, useRef,useEffect} from 'react';
import { View, Text, StyleSheet, Image,KeyboardAvoidingView ,TextInput,FlatList,TouchableOpacity} from 'react-native';
import MapItemComponent from "../../component/MapItemComponent";
import MapView, {PROVIDER_GOOGLE, PROVIDER_DEFAULT} from 'react-native-maps';
 import Bottomsheet from 'react-native-raw-bottom-sheet';
 import colors from '../../../assets/colors/colors';
import  Search from '../../../assets/icons/search3.svg'
import  Lacation from '../../../assets/icons/location.svg'


export default Login = ({ navigation }) => {
  const defaultProvider =
  Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE;

  const chibaRegion= {
    latitude: 	5.0165,
    longitude: 7.9126,
    latitudeDelta: 0.09,
    longitudeDelta: 0.09,
  };

  const bottomSheetRef = useRef();
  const bottomSheetRef2 = useRef();
  const bottomSheetRef3 = useRef();
  const [Destination, setDestination] = useState('');


  const data2 = [
    {
      id: 0,
      title: 'Lekki Phase 1',
    },
    {
      id: 1,
      title: 'Berger bridge',
    },
    {id: 2, title: 'Nkema Street'},
  
  ];

  useEffect(() => {
    setTimeout(async () => {
      bottomSheetRef.current.open()
    },100)
  })
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
    <MapItemComponent/>
    <KeyboardAvoidingView>
    <Bottomsheet
       height={339}
       keyboardAvoidingViewEnabled={false}
       animationType="slide"
       ref={bottomSheetRef}
       closeOnDragDown={true}
       closeOnPressMask={false}
       customStyles={{
         wrapper: {
           backgroundColor: 'transparent',
         },
         draggableIcon: {
          height: 0,
        },
         container: {
           backgroundColor: colors.white,
          
         },
       }}>
         <View style={style.buttomsheetContainer}>
         <View style={style.header}>
          <Text style={{
            fontFamily:"Quicksand-Bold",
            fontSize:22,
            color:colors.black
          }}>
          Take a ride...
          </Text>
         </View>
         <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={style.inputWrapper}>
<Search/>
        <TextInput
          style={style.emailInput}
          placeholder={'Search destination'}
          value={Destination}
          onChangeText={text => setDestination(text)}
          selectionColor={colors.primary}
          placeholderTextColor={colors.textLight}
        />
      </KeyboardAvoidingView>

      <FlatList
              data={data2}
              keyExtractor={item => item.id.toString}
              renderItem={({item}) => (
                <View style={[style.DisplayContainer ,StyleSheet.create({
              })]}>
                  <TouchableOpacity onPress={() => {}}>
                    <View style={style.destinationWrapper}>
                  <Lacation/>
                      <Text style={style.title}>{item.title}</Text>
              
                    </View>
                  </TouchableOpacity>
                
                </View>
              )}
            />
         </View>

    </Bottomsheet>
    </KeyboardAvoidingView>

    </View>
  )
}
const style = StyleSheet.create({
  header:{marginStart:24},
  emailInput: {
    paddingLeft: 16,
    borderRadius: 8,
    width: '100%',
    fontSize: 16,
   
    fontFamily: 'Urbanist-Regular',
    height: 56,
  },
  inputWrapper: {
    marginTop: 16,
    marginLeft: 22,
    flexDirection:'row',
    alignItems:'center'
  },

  destinationWrapper:{
    flexDirection:'row',
    alignItems:'center',

marginStart:16,
width: '100%',
padding:10

  },
  title:{
    fontSize: 16,
fontFamily: 'Urbanist-Regular',
marginStart:21
  }
})