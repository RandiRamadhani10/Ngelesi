import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Headerprops = ({propsName}) => {
  return (
    <View
      style={{
        backgroundColor: '#55705C',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%',
      }}>
      <View
        style={{
          width: '10%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            propsName.navs.navigate(propsName.nav);
          }}>
          <Text>
            <Icon name="chevron-left" size={20} solid color="white" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{width: '80%', alignItems: 'center'}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
          {propsName.nama}
        </Text>
      </View>
      <View style={{width: '10%'}}></View>
    </View>
  );
};

export default Headerprops;
