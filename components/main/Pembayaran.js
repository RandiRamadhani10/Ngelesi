import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Headerprops from '../child/HeaderProps';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Pembayaran = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{height: 50, justifyContent: 'center'}}>
        <Headerprops
          propsName={{
            nama: 'Pembayaran',
            nav: 'PilihKelas',
            navs: navigation,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: '#55705C',
          width: '75%',
          padding: 15,
          borderRadius: 15,
          margin: 20,
        }}>
        <Text style={{color: 'white'}}>Tagihan Sebesar</Text>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 5,
          }}>
          Rp.250.000.-
        </Text>
      </View>
      <View
        style={{
          borderRadius: 50,
          elevation: 4,
          width: '75%',
          marginBottom: 10,
        }}>
        <RNPickerSelect
          mode="dropdown"
          placeholder={{
            label: 'Metode Pembayaran',
            value: null,
            color: 'gray',
          }}
          textInputProps={{
            color: 'gray',
          }}
          onValueChange={value => console.log(value)}
          useNativeAndroidPickerStyle={false}
          style={{
            ...pickerSelectStyles,
            iconContainer: {
              top: 12,
              right: 15,
            },
          }}
          items={[
            {label: 'E wallet', value: 'L'},
            {label: 'Transfer Bank', value: 'P'},
          ]}
          Icon={() => {
            return <Icon name="caret-down" size={24} color="gray" />;
          }}
        />
      </View>
      <View
        style={{
          borderRadius: 50,
          elevation: 4,
          width: '75%',
        }}>
        <RNPickerSelect
          mode="dropdown"
          placeholder={{
            label: 'Pilih',
            value: null,
            color: 'gray',
          }}
          textInputProps={{
            color: 'gray',
          }}
          onValueChange={value => console.log(value)}
          useNativeAndroidPickerStyle={false}
          style={{
            ...pickerSelectStyles,
            iconContainer: {
              top: 12,
              right: 15,
            },
          }}
          items={[
            {label: 'Mandiri', value: 'L'},
            {label: 'BRI', value: 'P'},
          ]}
          Icon={() => {
            return <Icon name="caret-down" size={24} color="gray" />;
          }}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <TouchableOpacity style={style.inputButton}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                textAlignVertical: 'center',
                color: 'whitesmoke',
              }}>
              BAYAR
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  input: {
    backgroundColor: '#BAD79B',
    height: 50,
    width: 300,
    marginVertical: 5,
    borderRadius: 50,
    padding: 10,
    paddingLeft: 15,
    color: 'black',
    elevation: 4,
  },
  inputButton: {
    backgroundColor: '#55705C',
    height: 40,
    width: 120,
    margin: 12,
    borderRadius: 50,
    elevation: 4,
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50,
    paddingRight: 30,
    backgroundColor: '#BAD79B',
  },
});
export default Pembayaran;
