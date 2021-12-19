import React from 'react';
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import Headerprops from '../child/HeaderProps';
const Absensiguru = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 50,
          elevation: 10,
        }}>
        <Headerprops
          propsName={{
            nama: 'Absensi',
            nav: 'DetailKelasGuru',
            navs: navigation,
          }}
        />
      </View>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '80%',
                backgroundColor: '#71937A',
                marginVertical: 5,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  width: '100%',
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                  padding: 10,
                  borderRadius: 10,
                }}>
                Sabtu, 19/ hadir
              </Text>
            </View>
            <View
              style={{
                width: '80%',
                padding: 15,
                backgroundColor: '#BAD79B',
                borderRadius: 10,
                marginBottom: 5,
              }}>
              <Text>
                Ulasan materi digunakan untuk memastikan murid memahami materi
                yang disampaikan. Materi yang disampaikan diharapkan bermanfaat
                dan juga berguna bagi siswa yang bersangkutan, ka ... Baca
                selengkapnya
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TextInput
          style={style.input}
          placeholder="Masukan Nilai"
          placeholderTextColor="#70815D"
          keyboardType="default"
        />
        <TouchableOpacity style={style.inputButton}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
            Kirim
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  input: {
    backgroundColor: '#BAD79B',
    height: 40,
    width: '60%',
    marginVertical: 5,
    borderRadius: 50,
    elevation: 4,
    padding: 10,
    paddingLeft: 15,
  },
  inputDes: {
    backgroundColor: '#BAD79B',
    height: 100,
    width: 300,
    marginVertical: 5,
    borderRadius: 20,
    padding: 10,
    paddingLeft: 15,
    color: 'black',
    elevation: 4,
  },
  inputButton: {
    backgroundColor: '#55705C',
    height: 40,
    width: '25%',
    margin: 12,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
});
export default Absensiguru;
