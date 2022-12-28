import React, {useContext, useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import MapItemComponent from '../../component/MapItemComponent';
import MapView, {PROVIDER_GOOGLE, PROVIDER_DEFAULT} from 'react-native-maps';
import Bottomsheet from 'react-native-raw-bottom-sheet';
import colors from '../../../assets/colors/colors';
import Search from '../../../assets/icons/search3.svg';
import Locations from '../../../assets/icons/location.svg';
import Location2 from '../../../assets/icons/location2.svg';
import Point from '../../../assets/icons/point.svg';
import NavigateBack from '../../../assets/icons/navigateback.svg';
export default Login = ({navigation}) => {
  const defaultProvider =
    Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE;

  const chibaRegion = {
    latitude: 5.0165,
    longitude: 7.9126,
    latitudeDelta: 0.09,
    longitudeDelta: 0.09,
  };
  const [destination, setdestination] = useState('');
  const [processing, setProcessing] = useState(false);
  var destinationReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  const canProceed = destination.length > 0 && destinationReg.test(destination);

  const bottomSheetRef = useRef();
  const bottomSheetRef2 = useRef();
  const bottomSheetRef3 = useRef();
  const [Destination, setDestination] = useState('');
  const [currentLocation, setcurrentLocation] = useState('');
  const [isExpand, setisExpand] = useState(false);
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
      bottomSheetRef.current.open();
    }, );
  });
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View
        style={{
        paddingBottom:20,
          backgroundColor:colors.white
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems:'center',
            marginStart:22,
            marginTop:36
            
          }}>
          <TouchableOpacity onPress={()=>{}}>
          <NavigateBack />
          </TouchableOpacity>
        
          <Text
            style={{
              color: colors.black,
              fontSize: 22,
              fontFamily: 'Quicksand-Bold',
              marginStart: 10,
              color: colors.lightDark,
            }}>
            Where are you going to?
          </Text>
        </View>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={style.inputWrapper2}>
            <Point />
        <TextInput
          style={style.destinationInput}
          placeholder={'Current location'}
          value={currentLocation}
          onChangeText={text => setcurrentLocation(text)}
          selectionColor={colors.black}
          placeholderTextColor={colors.black}
        />
      </KeyboardAvoidingView>
        
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={style.inputWrapper2}>
            <Location2 />
        <TextInput
          style={style.destinationInput}
          placeholder={'Search destination'}
          value={destination}
          onChangeText={text => setdestination(text)}
          selectionColor={colors.black}
          placeholderTextColor={colors.black}
        />
      </KeyboardAvoidingView>
          
      </View>
      <MapItemComponent />

      <KeyboardAvoidingView>
        <Bottomsheet
          height={339}
          keyboardAvoidingViewEnabled={false}
          animationType="slide"
          ref={bottomSheetRef}
          closeOnDragDown={false}
          closeOnPressMask={true}
    
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
              <Text
                style={{
                  fontFamily: 'Quicksand-Bold',
                  fontSize: 22,
                  color: colors.black,
                }}>
                Take a ride...
              </Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
              <View style={style.inputWrapper}>
                <Search />
                <Text style={style.text}>Search destination</Text>
              </View>
            </TouchableOpacity>

            <FlatList
              data={data2}
              keyExtractor={item => item.id.toString}
              renderItem={({item}) => (
                <View style={[style.DisplayContainer, StyleSheet.create({})]}>
                  <TouchableOpacity onPress={() => {}}>
                    <View style={style.destinationWrapper}>
                      <Locations />
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
  );
};
const style = StyleSheet.create({
  header: {marginStart: 24, marginTop: 20},
  text: {
    fontSize: 16,
    color: colors.inactiveText,
    marginStart: 10,
  },
  inputWrapper: {
    marginTop: 16,
    marginHorizontal: 22,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: colors.offWhite,
    borderRadius: 10,
    width: '92%',
    height: 45,
    paddingHorizontal: 10,
  },


  destinationInput: {
    paddingLeft: 10,
    borderRadius: 8,
    width: '100%',
    fontSize: 14,
   color:colors.black,
    fontFamily: 'Urbanist-Regular',
    height: 56,

  },
  inputWrapper2: {
    marginTop: 21,
    marginHorizontal: 20,
    flexDirection:'row',
    backgroundColor: colors.offWhite,
    alignItems:'center',

    paddingHorizontal:10,
    borderRadius:8
  },
  destinationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginStart: 16,
    width: '100%',
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Urbanist-Regular',
    marginStart: 21,
    color: colors.lightDark,
  },
});
