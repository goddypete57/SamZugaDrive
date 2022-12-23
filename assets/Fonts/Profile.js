import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  KeyboardAvoidingView,
  TextInput,
  FlatList,
} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import Verify from '../../assets/icons/verify.svg';
import colors from '../../assets/colors/colors';
import ProfileIcon from '../../assets/icons/profile';
import Currency from '../../assets/icons/currency';
import Help from '../../assets/icons/help';
import Display from '../../assets/icons/mode';
import Notification from '../../assets/icons/notification';
import ArrowForward from '../../assets/icons/arrowforward';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React, {useContext, useState, useRef} from 'react';
// import BottomSheet from '@gorhom/bottom-sheet';
import Bottomsheet from 'react-native-raw-bottom-sheet';
import Arrow_left from '../../assets/icons/Arrow_left.svg';
import Search from '../../assets/icons/search.svg';
import {color} from 'react-native-reanimated';
// import Nigeria from '../../assets/icons/nigeria.svg';
// import Gambia from '../../assets/icons/gambia.svg';
// import Lebanon from '../../assets/icons/lebanon.svg';
import Correct from '../../assets/icons/correct.svg';

export default Profile = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const bottomSheetRef = useRef();
  const bottomSheetRef2 = useRef();
  const bottomSheetRef3 = useRef();
  const [isverify, setisVerify] = useState(false);
  const [amount, setAmount] = useState('');
  const [amount2, setAmount2] = useState('');
  const [currency, setCurrency] = useState('');
  const [display, setDisplay] = useState('')
  const data = [
    {
      id: 0,
      image:require('../../assets/images/lebanon.jpg'),
      title: 'Lebanese Pounds(LBP)',
    },
    {
      id: 1,
      image:require('../../assets/images/nigeria.jpg'),
      title: 'Nigerian  Naira(NGN)',
    },
    {id: 2,  image:require('../../assets/images/ghana.jpg'), title: 'Ghanian Cedes(GHC)'},
    {id: 3,  image:require('../../assets/images/gambia.jpg'), title: 'Gambian Dalasi (GMD)'},
  ];

  const data2 = [
    {
      id: 0,
      image:require('../../assets/images/light.png'),
      title: 'Light Mode',
    },
    {
      id: 1,
      image:require('../../assets/images/dark.png'),
      title: 'Dark Mode',
    },
    {id: 2,  image:require('../../assets/images/systemdefault.png'), title: 'Default Phone Setting'},
  
  ];
  return (
    <View style={style.container}>
      <View style={style.topbar}>
        <Text style={style.profileText}>Profile</Text>
        <View
          style={[
            style.verifyBagde,
            {
              backgroundColor: isverify ? colors.green : colors.inactiveText,
            },
          ]}>
          {isverify ? <Verify /> : null}
          <Text style={style.verifyText}>Unverified</Text>
        </View>
      </View>
      <TouchableOpacity style={style.imageWrapper} onPress={() => {}}>
        <Image
          source={{uri: 'https://i.stack.imgur.com/4wq5R.png'}}
          style={style.profileImg}
        />
      </TouchableOpacity>
      <View style={style.nameAndUsernameWrapper}>
        <Text style={style.Name}>Mercy Eneh</Text>
        <Text style={style.UserName}>@enehmercy</Text>
      </View>
      <Text style={style.AccountSetting}>Account Settings</Text>
      <View style={style.settingWrapper}>
        <TouchableOpacity
          style={style.personalDetailWrapper}
          onPress={() => {
            bottomSheetRef.current.open();
          }}>
          <View style={style.profileIconandtext}>
            <ProfileIcon />
            <Text style={style.personaDetail}>Personal Details</Text>
          </View>
          <ArrowForward />
        </TouchableOpacity>
        {/* currencyWrraper */}
        <TouchableOpacity
          style={style.DefaultWrapper}
          onPress={() => {
            bottomSheetRef2.current.open();
          }}>
          <View style={style.profileIconandtext}>
            <Currency />
            <Text style={style.personaDetail}>Default Currency</Text>
          </View>
          <ArrowForward />
        </TouchableOpacity>
        {/* Display mode Wrapper */}
        <TouchableOpacity style={style.DisplayWrapper} onPress={() => { bottomSheetRef3.current.open();}}>
          <View style={style.profileIconandtext}>
            <Display />
            <Text style={style.personaDetail}>Display Settings</Text>
          </View>
          <ArrowForward />
        </TouchableOpacity>
        {/* Help center */}
        <TouchableOpacity style={style.HelpWrapper} onPress={() => {}}>
          <View style={style.profileIconandtext}>
            <Help />
            <Text style={style.personaDetail}>Help Center</Text>
          </View>
          <ArrowForward />
        </TouchableOpacity>
        {/* Notifcation */}
        <TouchableOpacity style={style.NotificationsWrapper} onPress={() => {}}>
          <View style={style.profileIconandtext}>
            <Notification />
            <Text style={style.personaDetail}>Notifications</Text>
          </View>
          <Switch
            trackColor={{false: colors.blue5, true: colors.primary}}
            thumbColor={isEnabled ? colors.white : colors.primary}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={style.switch}
          />
        </TouchableOpacity>
        <Bottomsheet
          height={715}
          animationType="slide"
          ref={bottomSheetRef}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: colors.grey3,
              width: 75,
              height: 4,
            },
            container: {
              backgroundColor: colors.blue6,
              borderTopEndRadius: 30,
              borderTopLeftRadius: 30,
            },
          }}>
          <View style={style.BottomsheetWrapper}>
            <View style={style.header}>
              <TouchableOpacity  onPress={()=> { bottomSheetRef.current.close();}}>
                <Arrow_left fill={colors.textDark} />
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> { bottomSheetRef.current.close();}}>
                <View style={style.doneTextwrapper}>
                  <Text style={style.doneText}>Done</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={style.myDetailText}>My Details</Text>

            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <Text style={style.fullname}>Full Name</Text>
              <View style={style.fullnameWrapper}>
                <TextInput
                  style={style.fullnameinput}
                  editable={false}
                  value={amount}
                  onChangeText={text => setAmount(text)}
                  selectionColor={colors.inactiveColor}
                  placeholderTextColor={'#B6B9D9'}
                />
              </View>
              <Text style={style.Username}>Username</Text>
              <View style={style.UsernameWrapper}>
                <TextInput
                  style={style.UsernameInput}
                  value={amount2}
                  editable={false}
                  onChangeText={text => setAmount2(text)}
                  selectionColor={colors.inactiveColor}
                  placeholderTextColor={'#B6B9D9'}
                />
              </View>

              <Text style={style.email}>Email Adress</Text>
              <View style={style.emailWrapper}>
                <TextInput
                  style={style.emailInput}
                  value={amount2}
                  editable={false}
                  onChangeText={text => setAmount2(text)}
                  selectionColor={colors.inactiveColor}
                  placeholderTextColor={'#B6B9D9'}
                />
              </View>

              <Text style={style.country}>Country</Text>
              <View style={style.countryWrapper}>
                <TextInput
                  style={style.countryInput}
                  value={amount2}
                  editable={true}
                  onChangeText={text => setAmount2(text)}
                  selectionColor={colors.inactiveColor}
                  placeholderTextColor={'#B6B9D9'}
                />
              </View>
            </KeyboardAvoidingView>
          </View>
        </Bottomsheet>
        {/* second bottomsheet */}
        <Bottomsheet
          height={715}
          keyboardAvoidingViewEnabled={false}
          animationType="slide"
          ref={bottomSheetRef2}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: colors.grey3,
              width: 75,
              height: 4,
            },
            container: {
              backgroundColor: colors.blue6,
              borderTopEndRadius: 30,
              borderTopLeftRadius: 30,
            },
          }}>
          <View style={style.buttomsheetContainer}>
            <View style={style.header}>
              <TouchableOpacity  onPress={()=> { bottomSheetRef2.current.close();}}>
                <Arrow_left fill={colors.textDark} />
              </TouchableOpacity>
            </View>
            <Text style={style.choosecurrency}>Choose Currency</Text>

            <View style={style.searchCurrencyWrapper}>
              <TextInput
                style={style.searchinput}
                value={amount2}
                placeholder={'Search for a currency...'}
                placeholderTextColor={colors.inactiveColor}
                onChangeText={text => setAmount2(text)}
                selectionColor={colors.inactiveColor}
              />
              <Search fill={colors.drk} style={style.searchicon} />
            </View>
            <FlatList
              data={data}
              keyExtractor={item => item.id.toString}
              renderItem={({item}) => (
                <View style={[style.currencyContainer ,StyleSheet.create({
                  backgroundColor: item.id==currency ? colors.white : colors.blue6
              })]}>
                  <TouchableOpacity onPress={() => setCurrency(item.id)}>
                    <View style={style.titleContainer}>
                    <Image source={item.image} style={style.image}/>
                      <Text style={style.title}>{item.title}</Text>
                      <View style={style.checkWrapper}>
                      {item.id==currency?< Correct/>:null}
                      </View>
                    </View>
                  </TouchableOpacity>
                
                </View>
              )}
            />
          </View>
        </Bottomsheet>
        <Bottomsheet
          height={715}
          keyboardAvoidingViewEnabled={false}
          animationType="slide"
          ref={bottomSheetRef3}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: colors.grey3,
              width: 75,
              height: 4,
            },
            container: {
              backgroundColor: colors.blue6,
              borderTopEndRadius: 30,
              borderTopLeftRadius: 30,
            },
          }}>
          <View style={style.buttomsheetContainer}>
            <View style={style.header}>
              <TouchableOpacity onPress={()=> { bottomSheetRef3.current.close();}}>
                <Arrow_left fill={colors.textDark} />
              </TouchableOpacity>
            </View>
            <Text style={style.DisplaysettingTextWrapper}>Display Settings</Text>

          
            <FlatList
              data={data2}
              keyExtractor={item => item.id.toString}
              renderItem={({item}) => (
                <View style={[style.DisplayContainer ,StyleSheet.create({
                  backgroundColor: item.id==display ? colors.white : colors.blue6
              })]}>
                  <TouchableOpacity onPress={() => setDisplay(item.id)}>
                    <View style={style.DisplaysettingWrapper}>
                    <Image source={item.image} style={style.image2}/>
                      <Text style={style.title}>{item.title}</Text>
                      <View style={style.checkWrapper}>
                      {item.id==display?< Correct/>:null}
                      </View>
                    </View>
                  </TouchableOpacity>
                
                </View>
              )}
            />
          </View>
        </Bottomsheet>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'column',
  },
  topbar: {
    height: 70,
    backgroundColor: colors.white,
    shadowOffset: {width: 6, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 8,
    shadowColor: colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  profileText: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 20,
    color: colors.drk,
  },
  verifyBagde: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  verifyText: {
    fontFamily: 'Outfit-Regular',
    fontSize: 12,
  },
  imageWrapper: {
    alignItems: 'center',
  },
  profileImg: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginTop: 24,
  },
  nameAndUsernameWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Name: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 18,
    marginTop: 2,
    color: colors.textColor,
  },
  UserName: {
    fontFamily: 'Outfit-Regular',
    fontSize: 12,
    color: colors.inactiveColor,
  },
  AccountSetting: {
    color: colors.inactiveColor,
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    marginTop: 20,
    paddingHorizontal: 10,
  },

  settingWrapper: {
    paddingHorizontal: 10,
  },
  personalDetailWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: colors.blue7,
    marginTop: 10,
  },
  personaDetail: {
    marginLeft: 10,
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    color: colors.textColor,
  },
  profileIconandtext: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  DefaultWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: colors.blue7,
    marginTop: 20,
  },
  DisplayWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: colors.blue7,
    marginTop: 20,
  },
  HelpWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: colors.blue7,
    marginTop: 20,
  },
  NotificationsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: colors.blue7,
    marginTop: 20,
  },
  BottomsheetWrapper: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
  },
  doneTextwrapper: {
    backgroundColor: colors.green1,
    width: 56,
    height: 21,
    alignItems: 'center',
    borderRadius: 30,
  },
  doneText: {
    color: colors.white,
  },
  myDetailText: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 20,
    marginTop: 30,
    color: colors.drk,
  },
  fullname: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    marginTop: 30,
    color: colors.inactiveColor,
  },
  fullnameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    paddingVertical: 3,
    backgroundColor: colors.blue7,
    borderRadius: 8,
    marginTop: 10,
  },
  fullnameinput: {
    fontSize: 16,
    color: colors.textColor,
    fontFamily: 'Outfit-Regular',
    marginLeft: 5,
  },

  Username: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    marginTop: 20,
    color: colors.inactiveColor,
  },
  UsernameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    paddingVertical: 3,
    backgroundColor: colors.blue7,
    borderRadius: 8,
    marginTop: 10,
  },
  UsernameInput: {
    fontSize: 16,
    color: colors.textColor,
    fontFamily: 'Outfit-Regular',
    marginLeft: 5,
  },
  email: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    marginTop: 20,
    color: colors.inactiveColor,
  },
  emailWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    paddingVertical: 3,
    backgroundColor: colors.blue7,
    borderRadius: 8,
    marginTop: 10,
  },
  emailInput: {
    fontSize: 16,
    color: colors.textColor,
    fontFamily: 'Outfit-Regular',
    marginLeft: 5,
  },
  country: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    marginTop: 20,
    color: colors.inactiveColor,
  },
  countryWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    paddingVertical: 3,
    backgroundColor: colors.blue7,
    borderRadius: 8,
    marginTop: 10,
    
  },
  countryInput: {
    fontSize: 16,
    color: colors.textColor,
    fontFamily: 'Outfit-Regular',
    marginLeft: 5,
   
  },
  buttomsheetContainer: {
    paddingHorizontal: 16,
  },
  choosecurrency: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 20,
    marginTop: 30,
    color: colors.drk,
  },
  searchCurrencyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    paddingVertical: 3,
    backgroundColor: colors.blue7,
    borderRadius: 8,
    marginTop: 30,
    marginBottom:30
  },
  currencyContainer:{
    width:'100%',
    padding:'2%',
    borderRadius:5,
    marginBottom:10,
    overflow:'hidden',
    height:60,
    justifyContent:'center'
  },

  searchinput: {
    fontSize: 16,
    color: colors.textColor,
    fontFamily: 'Outfit-Regular',
    marginLeft: 5,
  },
  searchicon: {
    marginEnd: 13,
  },
  titleContainer:{
    flexDirection:'row',
    paddingRight:20,
    paddingLeft:10,
    paddingTop:10,
    paddingBottom:10,
    alignItems:'center',
      },

      title:{
        marginStart:10,
        fontFamily:'OutFit-Medium',
        fontSize:16,
        color:colors.textDark
      },
      checkWrapper:{
        flex: 1,
        alignItems: 'flex-end',
      },
      image:{
        borderRadius:10
      },
      DisplaysettingTextWrapper:{
        fontFamily: 'Outfit-SemiBold',
        fontSize: 20,
        marginTop: 30,
        color: colors.drk,
        marginBottom:30
      },
      DisplaysettingWrapper:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingRight:20,
        paddingLeft:10,
        paddingTop:10,
        paddingBottom:10,
      },
      DisplayContainer:{
        width:'100%',
        padding:'2%',
        borderRadius:5,
        marginBottom:10,
        overflow:'hidden',
        height:60,
        justifyContent:'center'
      }

});
