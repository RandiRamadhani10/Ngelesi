import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Headerprops from '../child/HeaderProps';
const Pilihkelas = ({navigation, routes}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 50, justifyContent: 'center'}}>
        <Headerprops
          propsName={{
            nama: 'Detail Kelas',
            nav: 'home',
            navs: navigation,
          }}
        />
      </View>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <View style={{width: '80%'}}>
              <View style={{width: '100%'}}>
                <Text style={style.text}>Nama Kelas</Text>
                <View style={style.input}>
                  <Text>Geografi 1</Text>
                </View>
                <Text style={style.text}>Mata Pelajaran</Text>
                <View style={style.input}>
                  <Text>Geografi</Text>
                </View>
                <Text style={style.text}>Nama Guru</Text>
                <View style={style.input}>
                  <Text>Alda Maretina</Text>
                </View>
                <Text style={style.text}>Kode Kelas</Text>
                <View style={style.input}>
                  <Text>1234</Text>
                </View>
                <Text style={style.text}>Jadwal Kelas</Text>
                <View style={style.input}>
                  <Text>19, 20, 21</Text>
                </View>
                <Text style={style.text}>Waktu Kelas</Text>
                <View style={style.input}>
                  <Text>07.00 (durasi 3 jam)</Text>
                </View>
                <Text style={style.text}>Harga Kelas</Text>
                <View style={style.input}>
                  <Text>Rp. 250.000</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={style.inputButton}
              onPress={() => {
                navigation.navigate('Pembayaran');
              }}>
              <Text style={{color: 'white'}}>Ambil Kelas</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const style = StyleSheet.create({
  input: {
    justifyContent: 'center',
    backgroundColor: '#BAD79B',
    height: 50,
    marginVertical: 10,
    borderRadius: 50,
    padding: 10,
    paddingLeft: 15,
    color: 'black',
    elevation: 4,
  },
  text: {fontSize: 15, marginTop: 15},
  inputButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#55705C',
    height: 40,
    width: 120,
    margin: 12,
    borderRadius: 50,
    elevation: 4,
  },
});
export default Pilihkelas;
