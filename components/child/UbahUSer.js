import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {launchImageLibrary} from 'react-native-image-picker';
const Ubahuser = () => {
  const [items, setItems] = useState();
  return (
    <KeyboardAvoidingView>
      <TextInput
        style={style.input}
        placeholder="Nama Lengkap"
        placeholderTextColor="#70815D"
        keyboardType="default"
      />

      <TextInput
        style={style.input}
        placeholder="Nomor Telepon"
        placeholderTextColor="#70815D"
      />
      <TextInput
        style={style.input}
        placeholder="Tempat Lahir"
        placeholderTextColor="#70815D"
        keyboardType="default"
      />
      <TextInput
        style={style.input}
        secureTextEntry={true}
        placeholder="Tanggal Lahir"
        placeholderTextColor="#70815D"
        keyboardType="default"
      />
      <TextInput
        style={style.input}
        secureTextEntry={true}
        placeholder="Umur"
        placeholderTextColor="#70815D"
        keyboardType="default"
      />
      <TextInput
        style={style.input}
        secureTextEntry={true}
        placeholder="Pendidikan"
        placeholderTextColor="#70815D"
        keyboardType="default"
      />
      <Text style={{marginLeft: 0, marginBottom: 10, marginTop: 30}}>
        Jenis Kelamin :
      </Text>
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
          items={[
            {label: 'Laki Laki', value: 'L'},
            {label: 'Perempuan', value: 'P'},
          ]}
          Icon={() => {
            return <Icon name="caret-down" size={24} color="gray" />;
          }}
        />
      </View>
      <TextInput
        style={style.input}
        secureTextEntry={true}
        placeholder="Alamat"
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
              Simpan
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
export default Ubahuser;
