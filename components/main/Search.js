import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Models from '../../models/Models';
const Search = ({navigation}) => {
  const [items, setItems] = useState([]);
  const [pressStatus, setStatus] = useState({status: true});
  const [username, onChangeUsername] = useState(null);
  const [cari, setCari] = useState('');
  const [bidang, onChangeBidang] = useState(null);
  const [Harga, onChangeHarga] = useState(null);
  useEffect(() => {
    const coba = async () => {
      const api = await Models.getAdmin();
      setItems(api);
    };
    coba();
  }, [setItems]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '90%',
          flexDirection: 'column',
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TextInput
            onChangeText={setCari}
            value={cari}
            style={style.input}
            placeholder="Cari guru"
            placeholderTextColor="#70815D"
            keyboardType="default"
          />
          <TouchableOpacity style={style.inputButton} onPress={() => cari()}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  color: 'whitesmoke',
                }}>
                CARI
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              marginVertical: 10,
              alignItems: 'center',
            }}>
            <Hasil navigation={navigation} cari={cari} data={items} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const Hasil = ({navigation, data, cari}) => {
  const [items, setItems] = useState([]);

  const filteredGuru = data.filter(data => {
    return data.nama.toUpperCase().includes(cari.toUpperCase());
  });
  console.log(filteredGuru);
  useEffect(() => {
    const coba = async () => {
      setItems(data);
    };
    coba();
  }, [setItems]);
  return (
    <View
      style={{
        width: '80%',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
          GURU
        </Text>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* <Text>Lebih Banyak</Text>
          <Text style={{marginLeft: 10}}>
            <Icon name="caret-right" size={24} color="#55705C" />
          </Text> */}
        </TouchableOpacity>
      </View>
      <View>
        {filteredGuru.map((data, index) => {
          return (
            <View
              key={index}
              style={{
                justifyContent: 'flex-start',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomColor: 'gray',
                borderBottomWidth: 3,
                marginBottom: 5,
              }}>
              <View style={{marginVertical: 10}}>
                <Text
                  style={{
                    fontSize: 15,
                    marginHorizontal: 2,
                  }}>
                  {data.nama}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 2,
                    fontWeight: 'bold',
                  }}>
                  {data.bidang}
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
                  }}
                  onPress={() => {
                    navigation.navigate('PilihKelas', {id: data.id_kelas});
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: 'white',
                    }}>
                    Lihat Detail
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
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={require('../../assets/ngelesi.png')}
                />
              </View>
            </View>
          );
        })}
        {filteredGuru === [null] ? <PopUp /> : <Text></Text>}
      </View>
    </View>
  );
};
const PopUp = ({navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{height: 100, width: 200, marginRight: 2}}
          source={require('../../assets/Service.png')}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Guru Tidak Ditemukan
        </Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  input: {
    backgroundColor: '#BAD79B',
    height: 40,
    width: '65%',
    marginVertical: 20,
    marginHorizontal: 0,
    borderRadius: 50,
    padding: 10,
    paddingLeft: 15,
    color: 'black',
    elevation: 4,
  },
  inputButton: {
    backgroundColor: '#55705C',
    height: 40,
    width: '30%',
    borderRadius: 50,
    marginVertical: 20,
    marginHorizontal: 0,
    elevation: 4,
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50,
    paddingRight: 30,
    backgroundColor: '#55705C',
  },
});

export default Search;
