import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Models from '../../models/Models';
import AsyncStorage from '@react-native-async-storage/async-storage';
import env from '../../models/env';
const User = ({navigation}) => {
  console.log('halo');
  const [items, setItems] = useState([]);
  useEffect(() => {
    const coba = async () => {
      const jsonValue = await AsyncStorage.getItem('user');
      const res = await JSON.parse(jsonValue);
      const api = await Models.getProfilebyIdUser(res);
      setItems([api]);
    };
    const unsubscribe = navigation.addListener('focus', async e => {
      try {
        await coba();
      } catch (error) {
        alert(error.message);
        navigation.goBack();
      }
    });
    return unsubscribe;
  }, [setItems]);
  return (
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      {items.map((data, index) => {
        let dataKelamin;
        if (data.jenis_kelamin == 'L') {
          dataKelamin = 'Laki-Laki';
        } else {
          dataKelamin = 'Perempuan';
        }
        return (
          <>
            <View
              style={{
                borderRadius: 100,
                marginTop: 15,
                borderColor: 'gray',
                borderWidth: 1,
              }}>
              <Image
                key={index}
                style={{
                  height: 124,
                  width: 124,
                  borderRadius: 100,
                  marginTop: 10,
                }}
                source={{uri: `${env.base + env.linkImg}${data.foto}`}}
              />
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{marginRight: 5}}>{data.nama}</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('UbahProfil');
                }}>
                <Icon name="edit" />
              </TouchableOpacity>
            </View>
            <Text>{dataKelamin}</Text>

            <View
              style={{
                width: 290,
                backgroundColor: '#BAD79B',
                padding: 15,
                borderRadius: 15,
                marginTop: 5,
                color: 'white',
              }}>
              <Text>Pendidikan Saat Ini</Text>
              <Text style={{marginBottom: 5}}>{data.pendidikan}</Text>
              {/* <Text>Bidang : </Text>
              <Text style={{marginBottom: 5}}>● Saintek</Text> */}
              <Text>Tempat dan Tanggal Lahir</Text>
              <Text style={{marginBottom: 5}}>
                {data.tempat_lahir}, {data.tanggal_lahir}
              </Text>
              <Text>Alamat</Text>
              <Text>{data.alamat}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <TouchableOpacity
                  style={style.inputButton}
                  onPress={() => {
                    navigation.navigate('UbahPassword');
                  }}>
                  <Text style={{color: 'white'}}>Ubah Sandi</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        );
      })}
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
});

export default User;
