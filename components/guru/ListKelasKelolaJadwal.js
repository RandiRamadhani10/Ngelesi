import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Headerprops from '../child/HeaderProps';
import Models from '../../models/Models';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Listkelaskelolajadwal = ({navigation}) => {
  const [items, setItems] = useState([]);
  const [data1, setData1] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const jsonValue = await AsyncStorage.getItem('user');
      const res = await JSON.parse(jsonValue);
      setItems(res);
      console.log(items);
      const api = await Models.getKelasByIdAdmin(items);
    };
    fetch();
  }, [setItems]);
  return (
    <View>
      <View style={{height: 50, justifyContent: 'center'}}>
        <Headerprops
          propsName={{
            nama: 'Kelas Kelola Jadwal',
            nav: 'UserGuru',
            navs: navigation,
          }}
        />
      </View>
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              paddingHorizontal: 30,
              justifyContent: 'flex-start',
              width: '100%',
              marginVertical: 10,
            }}>
            <View
              style={{
                paddingVertical: 20,
              }}>
              <View
                style={{
                  backgroundColor: '#BAD79B',
                  padding: 5,
                  borderRadius: 15,
                  paddingHorizontal: 10,
                  justifyContent: 'flex-start',
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{marginVertical: 10}}>
                  <Text
                    style={{
                      fontSize: 25,
                      marginHorizontal: 2,
                      fontWeight: 'bold',
                    }}>
                    IPA
                  </Text>
                  <TouchableOpacity
                    style={{
                      marginHorizontal: 2,
                      width: 105,
                      padding: 7,
                      backgroundColor: '#55705C',
                      alignItems: 'center',
                      borderRadius: 50,
                      marginVertical: 5,
                      elevation: 5,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: 'white',
                      }}>
                      Kelola
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    marginBottom: 10,
                    marginTop: 10,
                    marginRight: 10,
                    width: 90,
                    height: 90,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                    elevation: 5,
                  }}>
                  <Image
                    style={{height: 30, width: 30}}
                    source={require('../../assets/ngelesi.png')}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Listkelaskelolajadwal;
