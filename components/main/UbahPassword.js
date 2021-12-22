import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import HeaderProps from '../child/HeaderProps';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Models from '../../models/Models';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Ubahpassword = ({navigation}) => {
  const [sandiLama, setSandiLama] = useState(null);
  const [sandiBaru, setSandiBaru] = useState(null);
  const [konfirmasi, setkonfirmasi] = useState(null);
  const [popUp, setPopUp] = useState(null);
  const [items, setItems] = useState([]);
  const ubahPass = async () => {
    console.log(items);
    if (sandiLama == null || sandiBaru == null || konfirmasi == null) {
      return alert('semua field harus diisi');
    }
    if (sandiBaru !== konfirmasi) {
      return alert('sandi dan konfirmasi tidak sama');
    }
    const data = {id_user: items.id, password: sandiBaru};
    const json = await Models.ubahPassMurid(data);
    setItems(json);
    setPopUp(1);
  };
  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user', jsonValue);
    } catch (e) {}
  };
  useEffect(() => {
    const coba = async () => {
      const jsonValue = await AsyncStorage.getItem('user');
      const res = await JSON.parse(jsonValue);
      setItems(res);
    };
    coba();
  }, [setItems]);
  return (
    <View>
      <View style={{height: 50, elevation: 5}}>
        <HeaderProps
          propsName={{nama: 'Ubah Password', nav: 'user', navs: navigation}}
        />
      </View>
      <View
        style={{backgroundColor: '#D3F7FF', alignItems: 'center', padding: 10}}>
        <View style={{width: '80%'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 17, marginRight: 5}}>•</Text>
            <Text style={{fontSize: 17}}>
              Kata sandi harus terdiri dari minimal 8 karakter
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 17, marginRight: 5}}>•</Text>
            <Text style={{fontSize: 17}}>
              Jangan gunakan kata yang mudah ditebak seperti tanggal lahir dan
              nama
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 17, marginRight: 5}}>•</Text>
            <Text style={{fontSize: 17}}>
              Sandi lebih baik gabungan dari angka, huruf, atau simbol lain yang
              sulit ditebak
            </Text>
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <KeyboardAvoidingView>
          <TextInput
            onChangeText={setSandiLama}
            value={sandiLama}
            style={style.input}
            secureTextEntry={true}
            placeholder="Sandi Lama"
            placeholderTextColor="#70815D"
            keyboardType="default"
          />
          <TextInput
            onChangeText={setSandiBaru}
            value={sandiBaru}
            style={style.input}
            secureTextEntry={true}
            placeholder="Sandi Baru"
            placeholderTextColor="#70815D"
            keyboardType="default"
          />
          <TextInput
            onChangeText={setkonfirmasi}
            value={konfirmasi}
            style={style.input}
            secureTextEntry={true}
            placeholder="Konfirmasi Sandi"
            placeholderTextColor="#70815D"
            keyboardType="default"
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={style.inputButton}
              onPress={() => {
                ubahPass();
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    color: 'whitesmoke',
                  }}>
                  Ubah Sandi
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
      {popUp != null ? <PopUp navigation={navigation} /> : true}
    </View>
  );
};
const style = StyleSheet.create({
  input: {
    backgroundColor: '#BAD79B',
    height: 50,
    width: 350,
    marginVertical: 10,
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
const PopUp = ({navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        position: 'absolute',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '90%',
          position: 'absolute',
          borderColor: 'gray',
          borderRadius: 10,
          height: 300,
          top: 200,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
          backgroundColor: 'white',
        }}>
        <Image
          style={{height: '50%', width: '100%', marginRight: 2}}
          source={require('../../assets/Service.png')}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Perubahan Berhasil Disimpan
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('user');
          }}
          style={{
            padding: 15,
            margin: 10,
            borderRadius: 50,
            backgroundColor: '#55705C',
          }}>
          <Text style={{color: 'white'}}>Kembali</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Ubahpassword;
