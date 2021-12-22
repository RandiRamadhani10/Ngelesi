import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Headerprops from '../child/HeaderProps';
import Models from '../../models/Models';
const Pilihkelas = ({navigation, route}) => {
  const data = route.params;
  console.log(data.id);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const coba = async () => {
      const api = await Models.getKelasbyId(data.id);
      setItems(api);
    };
    coba();
  }, [setItems]);
  console.log(items);
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
          {items.map((dat, index) => {
            return (
              <View style={{alignItems: 'center'}}>
                <View style={{width: '80%'}}>
                  <View style={{width: '100%'}}>
                    <Text style={style.text}>Nama Kelas</Text>
                    <View style={style.input}>
                      <Text>{dat.judul_kelas}</Text>
                    </View>
                    {/* <Text style={style.text}>Mata Pelajaran</Text>
                    <View style={style.input}>
                      <Text>Geografi</Text>
                    </View> */}
                    <Text style={style.text}>Nama Guru</Text>
                    <View style={style.input}>
                      <Text>{dat.created_by}</Text>
                    </View>
                    <Text style={style.text}>Kode Kelas</Text>
                    <View style={style.input}>
                      <Text>{dat.kode_kelas}</Text>
                    </View>
                    <Text style={style.text}>Jadwal Kelas</Text>
                    <View style={style.input}>
                      <Text>{dat.kode_kelas}</Text>
                    </View>
                    <Text style={style.text}>Waktu Kelas</Text>
                    <View style={style.input}>
                      <Text>{dat.waktu_kelas}</Text>
                    </View>
                    <Text style={style.text}>Harga Kelas</Text>
                    <View style={style.input}>
                      <Text>{dat.harga_kelas}</Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
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
