import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Models from '../../models/Models';
import AsyncStorage from '@react-native-async-storage/async-storage';
import env from '../../models/env';
const Userguru = ({navigation}) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const jsonValue = await AsyncStorage.getItem('user');
      const res = await JSON.parse(jsonValue);
      console.log(res);
      const api = await Models.getAdminbyId(res);
      console.log(api);
      setItems([api]);

      if (api == null) {
        alert('error');
      }
    };
    const unsubscribe = navigation.addListener('focus', async e => {
      try {
        await fetch();
      } catch (error) {}
    });
    return unsubscribe;
  }, [setItems]);

  return (
    <>
      {items.map((data, index) => {
        return (
          <View
            key={index}
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
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
                }}
                source={{uri: `${env.base + env.linkImg}${data.foto}`}}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{marginRight: 5}}>{data.nama}</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('UbahProfilGuru');
                }}>
                <Icon name="edit" />
              </TouchableOpacity>
            </View>
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
              <Text style={style.text}>Bidang</Text>
              <Text style={{color: 'white', marginBottom: 5}}>
                {data.bidang}
              </Text>
              <Text style={style.text}>Alamat : </Text>
              <Text style={style.text}>● {data.alamat}</Text>
            </View>
          </View>
        );
      })}
    </>
  );
};
const KelasChild = () => {
  return (
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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
        <Text>Rp. 250.000</Text>
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
