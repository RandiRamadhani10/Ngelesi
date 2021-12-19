import React, {useState, useEffect, useRef} from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
} from 'react-native';
import dat from '../../utils/dat';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Models from '../../models/Models';
const DaftarUser = ({prop}) => {
  const [nama, onChangeNama] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [username, onChangeUsername] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [konfirmasiPassword, onChangeKonfirmasi] = useState(null);
  const [pilihan, onChangePilihan] = useState(null);
  const [items, setItems] = useState(null);
  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user', jsonValue);
    } catch (e) {}
  };
  const regis = async () => {
    const dat = {
      nama: nama,
      username: username,
      password: password,
      email: email,
      pilihan: pilihan,
    };

    if (
      nama === null ||
      username === null ||
      password === null ||
      pilihan === null ||
      email === null ||
      konfirmasiPassword === null
    ) {
      alert('data harus diisi ');
    }
    if (password !== konfirmasiPassword) {
      return alert('Pastikan password dan konfirmasi password sama');
    } else {
      console.log(dat);
      const res = await Models.register(dat);
      if (res == false) {
        alert('username atau email sudah dipakai');
      } else if (pilihan == 'murid') {
        const dataUser = {
          username: username,
          password: password,
          pilihan: pilihan,
          id: res[0].id_user,
        };
        console.log(dataUser);
        storeData(dataUser);
        prop.navigate('Main', {pilihan: pilihan});
      } else {
        const dataAdmin = {
          username: username,
          password: password,
          pilihan: pilihan,
          id: res[0].id_admin,
        };
        console.log(dataAdmin);
        storeData(dataAdmin);
        prop.navigate('Main', {pilihan: pilihan});
      }
    }
  };
  return (
    <KeyboardAvoidingView>
      <Text style={{marginLeft: 11, marginBottom: 10}}>Daftar sebagai :</Text>
      <View
        style={{
          borderRadius: 50,
          elevation: 4,
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
          onValueChange={onChangePilihan}
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
        style={style.input}
        onChangeText={onChangeNama}
        value={nama}
        placeholder="Nama"
        placeholderTextColor="#70815D"
        keyboardType="default"
      />
      <TextInput
        style={style.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="Username"
        placeholderTextColor="#70815D"
        keyboardType="default"
      />
      <TextInput
        style={style.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
        placeholderTextColor="#70815D"
      />
      <TextInput
        style={style.input}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
        placeholderTextColor="#70815D"
        keyboardType="default"
      />
      <TextInput
        style={style.input}
        onChangeText={onChangeKonfirmasi}
        value={konfirmasiPassword}
        secureTextEntry={true}
        placeholder="Konfirmasi Password"
        placeholderTextColor="#70815D"
        keyboardType="default"
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={style.inputButton} onPress={() => regis()}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                textAlignVertical: 'center',
                color: 'whitesmoke',
              }}>
              DAFTAR
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  input: {
    backgroundColor: '#BAD79B',
    height: 50,
    width: 300,
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
    width: 120,
    margin: 12,
    borderRadius: 50,
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
    backgroundColor: '#BAD79B',
  },
});
export default DaftarUser;
