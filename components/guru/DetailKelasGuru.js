import React from 'react';
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
const Detailkelasguru = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 70, justifyContent: 'center'}}>
        <Headerguru
          propsName={{
            nama: 'Geografi',
            namaGuru: 'Faisal',
            pertemuan: '3x pertemuan (13, 19, 20)',
            nav: 'kelas',
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
        </ScrollView>
      </SafeAreaView>
      <View
        style={{
          height: 100,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={style.inputButton}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
      </View>
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
