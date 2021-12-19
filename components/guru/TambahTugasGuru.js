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
const Tambahtugasguru = ({navigation}) => {
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
            nama: 'TambahTugas',
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
            }}>
            <TextInput
              style={style.input}
              placeholder="Judul Tugas"
              placeholderTextColor="#70815D"
              keyboardType="default"
            />
            <TextInput
              style={style.inputDes}
              placeholder="Deskripsi optional"
              placeholderTextColor="#70815D"
              keyboardType="default"
            />
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <View style={{width: 300, marginVertical: 5}}>
              <Text>Sisipkan File</Text>
              <View
                style={{
                  width: 300,
                  marginVertical: 5,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: 120,
                    height: 100,
                    borderRadius: 10,
                    backgroundColor: '#C4C4C4',
                    justifyContent: 'flex-end',
                  }}>
                  <Text
                    style={{
                      width: 120,
                      backgroundColor: '#4A4A4A',
                      color: 'white',
                      padding: 7,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                    }}>
                    Tugas 1
                  </Text>
                </View>
                <View
                  style={{
                    width: 120,
                    height: 100,
                    borderRadius: 10,
                    backgroundColor: '#C4C4C4',
                    justifyContent: 'flex-end',
                  }}>
                  <Text
                    style={{
                      width: 120,
                      backgroundColor: '#4A4A4A',
                      color: 'white',
                      padding: 7,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                    }}>
                    Tugas 1
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={{width: '100%', alignItems: 'center'}}>
        <TouchableOpacity style={style.inputButton}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
            Unggah
          </Text>
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
    width: 120,
    margin: 12,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
});
export default Tambahtugasguru;
