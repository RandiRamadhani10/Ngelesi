import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import Headerprops from '../child/HeaderProps';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Models from '../../models/Models';
import env from '../../models/env';
const Detailguru = ({navigation, route}) => {
  const id = route.params;
  const [items, setItems] = useState([]);
  useEffect(() => {
    const coba = async () => {
      const api = await Models.getAdminbyId(id);
      setItems([api]);
      console.log(items);
    };
    coba();
  }, [setItems]);
  console.log(items);
  return (
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <View style={{height: 50, justifyContent: 'center'}}>
        <Headerprops
          propsName={{nama: 'Biodata Guru', nav: 'home', navs: navigation}}
        />
      </View>
      {items.map((data, index) => {
        return (
          <View style={{width: '100%', alignItems: 'center'}}>
            <Image
              style={{
                height: 124,
                width: 124,
                borderRadius: 100,
                marginTop: 10,
              }}
              source={{uri: `${env.base + env.linkImgAdmin}${data.foto}`}}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{marginRight: 5}}>{data.nama}</Text>
            </View>
            <Text></Text>
            <View
              style={{
                width: 290,
                backgroundColor: '#55705C',
                padding: 15,
                borderRadius: 15,
                marginTop: 5,
                color: 'white',
              }}>
              <Text style={style.text}></Text>
              {/* <Text style={{color: 'white', marginBottom: 5}}>
          S1 Geografi - Universitas Negeri Surabaya{' '}
        </Text> */}
              <Text style={style.text}>Bidang : </Text>
              <Text style={style.text}>● {data.bidang}</Text>
            </View>
          </View>
        );
      })}
      <KelasGuru navigation={navigation} id={id} />
    </View>
  );
};
const style = StyleSheet.create({
  text: {color: 'white'},
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
const KelasGuru = ({navigation, id}) => {
  console.log(id.id);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const coba = async () => {
      const api = await Models.getKelasTersediabyIdadmin(id.id);
      setItems([api]);
    };
    coba();
  }, [setItems]);

  return (
    <>
      {items.map((data, index) => {
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
              <Text style={{fontWeight: 'bold'}}>{data.judul_kelas}</Text>
              {/* <Text>3x Pertemuan</Text> */}
              <Text>{data.jadwal_kelas}</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text>Rp. {data.harga_kelas}</Text>
              <TouchableOpacity
                style={{
                  padding: 5,
                  backgroundColor: '#55705C',
                  borderRadius: 50,
                }}
                onPress={() => {
                  navigation.navigate('PilihKelas', {id: data.id_kelas});
                }}>
                <Text style={{color: 'white'}}>Ambil Kelas</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </>
  );
};
export default Detailguru;
