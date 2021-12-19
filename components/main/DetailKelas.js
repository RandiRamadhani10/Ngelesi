import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import Headerprops from '../child/HeaderProps';
const Detailkelas = ({navigation, route}) => {
  const id_kelas = route.params;
  console.log(id_kelas);
  return (
    <View style={{alignItems: 'center'}}>
      <View style={{height: 50, justifyContent: 'center'}}>
        <Headerprops
          propsName={{nama: 'Geografi', nav: 'kelas', navs: navigation}}
        />
      </View>
      <TouchableOpacity
        style={{
          width: 100,
          height: 40,
          margin: 20,
          borderRadius: 50,
          backgroundColor: '#55705C',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          Absensi
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '70%',
          backgroundColor: '#BAD79B',
          padding: 15,
          borderRadius: 20,
          elevation: 5,
        }}
        onPress={() => {
          navigation.navigate('Tugas');
        }}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Tugas 1</Text>
        <Text style={{fontSize: 18}}>Tenggat :</Text>
        <Text style={{fontSize: 18}}>Status :</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Detailkelas;
