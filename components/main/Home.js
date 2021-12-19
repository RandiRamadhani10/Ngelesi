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
import Models from '../../models/Models';
const Home = ({navigation}) => {
  const [items, setItems] = useState([]);
  const [data1, setData1] = useState([]);
  const [pressStatus, setStatus] = useState({status: true});
  var dat = [];
  useEffect(() => {
    const coba = async () => {
      const api = await Models.getKelas();
      setItems(api);
      var dats = api.pop();
      dat.push(dats);
      setData1(dat);
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
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              backgroundColor: '#BAD79B',
              width: '100%',
              height: 90,
              alignItems: 'center',
              flexDirection: 'row',
              elevation: 5,
            }}>
            <View
              style={{
                width: '15%',
                height: 90,
                alignItems: 'center',
              }}></View>
            <View
              style={{
                width: '70%',
                height: 90,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 19, margin: 5, fontWeight: 'bold'}}>
                JADWAL KELAS HARI INI
              </Text>
              <Text style={{fontSize: 15, margin: 5}}></Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('kelas');
              }}
              style={{
                width: '15%',
                height: 90,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>
                <Icon name="chevron-right" size={25} solid color="black" />
              </Text>
            </TouchableOpacity>
          </View>
          <GuruTerbaik prop={navigation} />
          <KelasTerbaru prop={navigation} />
          <KelasMin prop={navigation} />
        </ScrollView>
      </SafeAreaView>
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
const KelasTerbaru = ({prop}) => {
  const [items, setItems] = useState([]);
  const [data1, setData1] = useState([]);
  const [pressStatus, setStatus] = useState({status: true});
  var dat = [];
  useEffect(() => {
    const coba = async () => {
      const api = await Models.getSemuaKelasTersedia();
      var dats = api.pop();
      dat.push(dats);
      setItems(dat);
    };
    coba();
  }, [setItems]);
  return (
    <View
      style={{
        paddingHorizontal: 30,
        justifyContent: 'flex-start',
        width: '100%',
        marginVertical: 10,
      }}>
      <Text
        style={{
          fontSize: 18,
          margin: 2,
          fontWeight: 'bold',
        }}>
        Kelas Terbaru
      </Text>
      <View
        style={{
          paddingBottom: 25,
          borderBottomColor: 'black',
          borderBottomWidth: 3,
        }}>
        {items.map((data, index) => {
          return (
            <View
              key={index}
              style={{
                justifyContent: 'flex-start',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{marginVertical: 10}}>
                <Text
                  style={{
                    fontSize: 15,
                    marginHorizontal: 2,
                  }}>
                  {data.created_by}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 2,
                    fontWeight: 'bold',
                  }}>
                  {data.judul_kelas}
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
                  }}
                  onPress={() => {
                    const dat = data.id_kelas;
                    prop.navigate('PilihKelas', (id_kelas = {dat}));
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: 'white',
                    }}>
                    Ambil Kelas
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
          );
        })}
      </View>
    </View>
  );
};
const GuruTerbaik = ({prop}) => {
  const [items, setItems] = useState([]);
  const [data1, setData1] = useState([]);
  const [pressStatus, setStatus] = useState({status: true});
  var dat = [];
  useEffect(() => {
    const coba = async () => {
      const api = await Models.getRating();
      dat.push(api[0]);
      setItems(dat);
    };
    coba();
  }, [setItems]);
  return (
    <View
      style={{
        paddingHorizontal: 30,
        justifyContent: 'flex-start',
        width: '100%',
        marginVertical: 10,
      }}>
      <Text style={{fontSize: 18, margin: 2, fontWeight: 'bold'}}>
        Guru Terbaik Bulan Ini
      </Text>
      <View
        style={{
          paddingBottom: 25,
          borderBottomColor: 'black',
          borderBottomWidth: 3,
        }}>
        {items.map((data, index) => {
          return (
            <View
              key={index}
              style={{
                justifyContent: 'flex-start',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{marginVertical: 10}}>
                <Text
                  style={{
                    fontSize: 15,
                    marginHorizontal: 2,
                  }}>
                  {data.username}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 2,
                    fontWeight: 'bold',
                  }}>
                  Sosiologi
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
                  }}
                  onPress={() => {
                    prop.navigate('DetailGuru', {id_admin: data.id_admin});
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
                  elevation: 5,
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={require('../../assets/ngelesi.png')}
                />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
const KelasMin = ({prop}) => {
  const [items, setItems] = useState([]);
  const [data1, setData1] = useState([]);
  const [pressStatus, setStatus] = useState({status: true});
  var dat = [];
  useEffect(() => {
    const coba = async () => {
      const api = await Models.getSemuaKelasTersedia();
      dat.push(api[0]);
      setItems(dat);
    };
    coba();
  }, [setItems]);
  return (
    <View
      style={{
        paddingHorizontal: 30,
        justifyContent: 'flex-start',
        width: '100%',
        marginVertical: 10,
      }}>
      <Text
        style={{
          fontSize: 18,
          margin: 2,
          fontWeight: 'bold',
        }}>
        Kelas Terjangkau
      </Text>
      {items.map((data, index) => {
        return (
          <View
            key={index}
            style={{
              paddingBottom: 25,
              borderBottomColor: 'black',
              borderBottomWidth: 3,
            }}>
            <View
              style={{
                justifyContent: 'flex-start',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{marginVertical: 10}}>
                <Text
                  style={{
                    fontSize: 15,
                    marginHorizontal: 2,
                  }}>
                  {data.created_by}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 2,
                    fontWeight: 'bold',
                  }}>
                  {data.judul_kelas}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    marginHorizontal: 2,
                  }}>
                  Rp. {data.harga_kelas}
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
                  }}
                  onPress={() => {
                    const dat = data.id_kelas;
                    prop.navigate('PilihKelas', (id_kelas = {dat}));
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: 'white',
                    }}>
                    Ambil Kelas
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
        );
      })}
    </View>
  );
};
export default Home;
