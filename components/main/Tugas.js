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
import Icon from 'react-native-vector-icons/FontAwesome5';
const Tugas = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{height: 50}}>
        <Headerprops
          propsName={{nama: 'Tugas', nav: 'DetailKelas', navs: navigation}}
        />
      </View>
      <View
        style={{
          marginTop: 20,
          width: '70%',
          backgroundColor: '#BAD79B',
          padding: 15,
          borderRadius: 20,
          elevation: 5,
        }}
        onPress={() => {
          navigation.navigate('Tugas');
        }}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>
          Sosiologi / Tugas 1
        </Text>
        <Text style={{fontSize: 18}}>Tenggat :</Text>
        <Text style={{fontSize: 18}}>Status :</Text>
      </View>
      <View
        style={{
          marginTop: 20,
          width: '70%',
          height: 120,
          backgroundColor: '#C4C4C4',
          borderRadius: 15,
          elevation: 5,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            height: 40,
            backgroundColor: '#6A6A6A',
            borderBottomStartRadius: 15,
            borderBottomEndRadius: 15,
            elevation: 5,
            paddingHorizontal: 15,
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 15, color: 'white'}}>Soal Tugas 1</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
        }}>
        <View style={{width: '70%'}}>
          <Text style={{fontSize: 22}}>Tugas anda</Text>

          <Text style={{fontSize: 18}}>
            <Icon name="paperclip" size={20} style={{marginRight: 5}} />
              Tugas 1
          </Text>
        </View>
        <View
          style={{
            width: '70%',
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              marginVertical: 10,
              borderRadius: 50,
              backgroundColor: '#55705C',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              Kirim
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              marginVertical: 10,
              borderRadius: 50,
              backgroundColor: 'gray',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              Batal
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Tugas;
