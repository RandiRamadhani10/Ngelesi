import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Headerguru from '../child/HeaderGuru';
import Models from '../../models/Models';
const Detailkelasguru = ({route, navigation}) => {
  let id = route.params;
  const [items, setItems] = useState(null);
  const [tugas, setTugas] = useState(null);

  useEffect(() => {
    const coba = async () => {
      console.log(id[0].id_kelas);
      const res = await Models.getPendaftar(id[0]);
      setItems(res);
      console.log(res);
      if (res !== null) {
        const responses = await Models.getTugas(id[0]);
        setTugas(responses);
      }
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
  console.log(id);
  return (
    <View style={{flex: 1}}>
      <View style={{height: 70, justifyContent: 'center'}}>
        <Headerguru
          propsName={{
            nama: id[0].judul_kelas,
            namaGuru: id[0].created_by,
            pertemuan: id[0].jadwal_kelas,
            nav: 'kelasGuru',
            navs: navigation,
          }}
        />
      </View>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          {tugas == null ? (
            <View
              style={{
                width: '100%',
                height: 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 30, color: 'gray'}}>
                Belum ada Pendaftar !
              </Text>
            </View>
          ) : (
            <ChildTugas navigation={navigation} id={tugas} />
          )}
        </ScrollView>
      </SafeAreaView>
      <View
        style={{
          height: 100,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {items == null ? (
          <Text></Text>
        ) : (
          <ChildButton navigation={navigation} id={items} />
        )}
      </View>
    </View>
  );
};
const ChildTugas = ({navigation, id}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          marginVertical: 15,
          width: '75%',
          backgroundColor: '#BAD79B',
          padding: 10,
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.navigate('DetailTugas');
        }}>
        <Text style={{fontSize: 25}}>Tugas</Text>
        <Text>Tenggat :</Text>
      </TouchableOpacity>
    </View>
  );
};
const ChildButton = ({navigation}) => {
  return (
    <View
      style={{
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity style={style.inputButton}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
              color: 'whitesmoke',
              fontWeight: 'bold',
            }}>
            Rating
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: 50,
          backgroundColor: '#55705C',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.navigate('TambahTugasGuru');
        }}>
        <Icon name="plus" color="white" size={25} />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.inputButton}
        onPress={() => {
          navigation.navigate('AbsensiGuru');
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
              color: 'whitesmoke',
              fontWeight: 'bold',
            }}>
            Absensi
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  input: {
    backgroundColor: '#BAD79B',
    height: 50,
    width: 250,
    marginVertical: 5,
    borderRadius: 50,
    padding: 10,
    paddingLeft: 15,
    color: 'black',
    elevation: 4,
  },
  inputButton: {
    backgroundColor: '#55705C',
    height: 40,
    width: 100,
    margin: 12,
    borderRadius: 50,
    elevation: 4,
  },
});
export default Detailkelasguru;
