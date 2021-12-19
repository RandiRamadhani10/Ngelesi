import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import Headerprops from '../child/HeaderProps';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Models from '../../models/Models';
const Detailguru = ({navigation, route}) => {
  const {id_admin} = route.params;
  const [items, setItems] = useState([]);
  useEffect(() => {
    const coba = async () => {
      const api = await Models.getAdminbyId(id_admin);
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
          <>
            <Image
              style={{
                height: 124,
                width: 124,
                borderRadius: 100,
                marginTop: 10,
              }}
              source={require('../../assets/bg.png')}
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
          </>
        );
      })}
      <KelasGuru navigation={navigation} id={id_admin} />
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
  console.log(id);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const coba = async () => {
      const api = await Models.getKelasTersediabyIdadmin(id);
      setItems([api]);
      console.log(items);
    };
    coba();
  }, [setItems]);
  console.log(items);
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
        <Text style={{fontWeight: 'bold'}}>Geografi 1</Text>
        <Text>3x Pertemuan</Text>
        <Text>( 10, 12, 14)</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
        <Text>Rp. 250.000</Text>
        <TouchableOpacity
          style={{padding: 5, backgroundColor: '#55705C', borderRadius: 50}}
          onPress={() => {
            navigation.navigate('PilihKelas');
          }}>
          <Text style={{color: 'white'}}>Ambil Kelas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Detailguru;
