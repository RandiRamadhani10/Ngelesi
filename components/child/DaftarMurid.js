import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {NavigationContainer} from '@react-navigation/native';
const Daftarmurid = ({prop}) => {
  const [namaMurid, onChangeNamaMurid] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [username, onChangeUsername] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [rePassword, onChangeRePassword] = useState(null);
  const [alamat, onChangeAlamat] = useState(null);
  const [bidang, onChangeBidang] = useState(null);
  const [gender, onChangeGender] = useState(null);
  const regis = () => {
    prop.navigate('Main');
  };
  return (
    <KeyboardAvoidingView>
      <TextInput
        style={style.input}
        onChangeText={onChangeNamaMurid}
        value={namaMurid}
        placeholder="Nama Murid"
        placeholderTextColor="whitesmoke"
        keyboardType="default"
      />
      <TextInput
        style={style.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
        placeholderTextColor="whitesmoke"
        keyboardType="default"
      />
      <TextInput
        style={style.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="Username"
        placeholderTextColor="whitesmoke"
        keyboardType="default"
      />
      <TextInput
        style={style.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
        placeholderTextColor="whitesmoke"
        keyboardType="default"
      />
      <TextInput
        style={style.input}
        onChangeText={onChangeRePassword}
        value={rePassword}
        placeholder="Password"
        placeholderTextColor="whitesmoke"
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
    backgroundColor: '#FFADAD',
    borderColor: 'whitesmoke',
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    paddingLeft: 15,
    color: 'whitesmoke',
  },
  inputButton: {
    backgroundColor: '#FFADAD',
    borderColor: 'whitesmoke',
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    borderRadius: 50,
    color: 'whitesmoke',
  },
});
export default Daftarmurid;
