import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import dat from '../../utils/dat';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Models from '../../models/Models';

const Kelasguru = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('user');
        const res = await JSON.parse(value);
        console.log(res.id);
        const responses = await Models.getKelasbyIdUser(res);
        setItems(responses);
        return console.log('hai');
      } catch (e) {
        // error reading value
      }
    };
    getData();
  }, [setItems]);
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <SafeAreaView
        style={{
          alignItems: 'center',
          width: '100%',
        }}>
        <ScrollView style={{width: '100%'}}>
          <View style={{width: '100%', alignItems: 'center'}}></View>
        </ScrollView>
      </SafeAreaView>
      {items == null ? (
        <Text
          style={{
            marginTop: 30,
            fontWeight: 'bold',
            fontSize: 20,
            color: 'gray',
          }}>
          Tidak ada Kelas Yang Tersedia !
        </Text>
      ) : (
        <KelasChild navigation={navigation} id={items} />
      )}
      <View
        style={{
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#55705C',
          borderRadius: 50,
          position: 'absolute',
          right: 20,
          bottom: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Chat');
          }}>
          <Text>
            <Icon name="comments" size={30} solid color="white" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const KelasChild = ({navigation, id}) => {
  const [items, setItems] = useState(id);
  return (
    <>
      {items.map((data, index) => {
        return (
          <TouchableOpacity
            style={{
              backgroundColor: '#BAD79B',
              width: '70%',
              padding: 15,
              borderRadius: 15,
              marginTop: 15,
            }}
            onPress={() => {}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              {data.judul_kelas}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
              }}>
              <Text
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 2,
                }}>
                <Icon name="calendar-alt" size={15} />
              </Text>
              <Text>Kamis, Jumat, Sabtu</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
              }}>
              <Text
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 2,
                }}>
                <Icon name="clock" size={15} />
              </Text>
              <Text>{data.waktu_kelas}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
              }}>
              <Text
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 2,
                }}>
                <Icon name="user" solid size={15} />
              </Text>
              <Text>Dwi Randi Ramadhani</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
};
export default Kelasguru;
