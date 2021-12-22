import {placeholder} from '@babel/types';
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Dimensions,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import Footer from './child/footer';
import Models from '../models/Models';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RNPickerSelect from 'react-native-picker-select';
import dat from '../utils/dat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
const Login = ({navigation}) => {
  const [username, onChangeUsername] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [pilihan, onChangePilihan] = useState(null);
  const [items, setItems] = useState(null);
  const height = Dimensions.get('window').height;

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      const res = await JSON.parse(jsonValue);
      if (jsonValue == null) {
        return null;
      } else {
        const response = await Models.login(res);
        setItems(response);
        if (response == null || response == false) {
        } else {
          console.log(items);
          return navigation.navigate('Main', {pilihan: res.pilihan});
        }
        return true;
      }
    } catch (e) {}
  };
  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user', jsonValue);
    } catch (e) {}
  };

  const loginReq = async () => {
    const dat = {username: username, password: password, pilihan: pilihan};
    if (username === null || password === null || pilihan === null) {
      return alert('Data harus diisi !!!');
    }

    const res = await Models.login(dat);
    if (res == null || res == false) {
      alert('Username dan Password salah!!!');
      return true;
    } else {
      if (pilihan == 'murid') {
        const dataLokal = {
          username: username,
          password: password,
          pilihan: pilihan,
          id: res.id_user,
        };
        storeData(dataLokal);
        return navigation.navigate('Main', {pilihan: pilihan});
      } else {
        const dataLokal = {
          username: username,
          password: password,
          pilihan: pilihan,
          id: res.id_admin,
        };
        storeData(dataLokal);
        return navigation.navigate('Main', {pilihan: pilihan});
      }
    }
  };
  useEffect(() => {
    getData();
  }, [setItems]);
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: 'red'}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: height,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 15,
            }}>
            <Image
              style={{height: 45, width: 45, marginRight: 2}}
              source={require('../assets/ngelesi.png')}
            />
            <Text style={{color: '#55705C', fontSize: 30, marginLeft: 0}}>
              NGELESI
            </Text>
          </View>
          <KeyboardAvoidingView
            style={{justifyContent: 'center', alignContent: 'center'}}>
            <Text style={{marginLeft: 12}}>Daftar sebagai</Text>
            <View
              style={{
                margin: 12,
                borderRadius: 50,
                elevation: 4,
                width: 300,
              }}>
              <RNPickerSelect
                mode="dropdown"
                placeholder={{
                  label: 'Pilih',
                  value: null,
                  color: 'gray',
                }}
                textInputProps={{
                  color: 'gray',
                }}
                useNativeAndroidPickerStyle={false}
                style={{
                  ...pickerSelectStyles,
                  iconContainer: {
                    top: 12,
                    right: 15,
                  },
                }}
                onValueChange={value => {
                  onChangePilihan(value);
                }}
                items={[
                  {label: 'Guru', value: 'guru'},
                  {label: 'Murid', value: 'murid'},
                ]}
                Icon={() => {
                  return <Icon name="caret-down" size={24} color="gray" />;
                }}
              />
            </View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeUsername}
              value={username}
              placeholder="Username"
              placeholderTextColor="#70815D"
              keyboardType="default"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangePassword}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#70815D"
              keyboardType="default"
            />
          </KeyboardAvoidingView>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 5,
            }}>
            <Text>Belum punya akun? </Text>
            <TouchableOpacity
              title={'daftar'}
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <Text style={{color: '#FF5252'}}>Daftar</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              loginReq();
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#BAD79B',
    height: 40,
    width: 300,
    margin: 12,
    borderRadius: 50,
    padding: 10,
    paddingLeft: 15,
    color: 'whitesmoke',
    elevation: 4,
  },
  button: {
    marginTop: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 40,
    width: 120,
    backgroundColor: '#55705C',
    elevation: 4,
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 15,
    width: 300,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50,
    paddingRight: 30,
    backgroundColor: '#BAD79B',
  },
});
export default Login;
