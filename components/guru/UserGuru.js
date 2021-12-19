import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Userguru = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <Image
        style={{height: 124, width: 124, borderRadius: 100, marginTop: 10}}
        source={require('../../assets/bg.png')}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{marginRight: 5}}>Alda Maretina</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('UbahProfil');
          }}>
          <Icon name="edit" />
        </TouchableOpacity>
      </View>
      <Text>Wanita</Text>
      <View style={{flexDirection: 'row'}}>
        <View>
          <TouchableOpacity
            style={style.inputButton}
            onPress={() => {
              navigation.navigate('ListKelasKelolaJadwal');
            }}>
            <Text style={style.text}>Kelola Jadwal</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={style.inputButton}
            onPress={() => {
              navigation.navigate('UbahPassword');
            }}>
            <Text style={style.text}>Ubah Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: 290,
          backgroundColor: '#55705C',
          padding: 15,
          borderRadius: 15,
          marginTop: 5,
          color: 'white',
        }}>
        <Text style={style.text}>Pendidikan Terakhir</Text>
        <Text style={{color: 'white', marginBottom: 5}}>
          S1 Geografi - Universitas Negeri Surabaya{' '}
        </Text>
        <Text style={style.text}>Bidang : </Text>
        <Text style={style.text}>● Geografi</Text>
      </View>
      <View
        style={{
          width: 290,
          backgroundColor: '#BAD79B',
          padding: 10,
          borderRadius: 15,
          marginTop: 5,
          color: 'white',
          flexDirection: 'row',
        }}>
        <View style={{flex: 1}}>
          <Text style={{fontWeight: 'bold'}}>Geografi 1</Text>
          <Text>3x Pertemuan</Text>
          <Text>( 10, 12, 14)</Text>
        </View>
        <View
          style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <Text>Rp. 250.000</Text>
        </View>
      </View>
      <View
        style={{
          width: 290,
          backgroundColor: '#BAD79B',
          padding: 10,
          borderRadius: 15,
          marginTop: 5,
          color: 'white',
          flexDirection: 'row',
        }}>
        <View style={{flex: 1}}>
          <Text style={{fontWeight: 'bold'}}>Geografi 2</Text>
          <Text>3x Pertemuan</Text>
          <Text>( 10, 12, 14)</Text>
        </View>
        <View
          style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <Text>Rp. 250.000</Text>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  inputButton: {
    backgroundColor: '#55705C',
    borderColor: 'whitesmoke',
    height: 40,
    width: 120,
    margin: 12,
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
export default Userguru;
