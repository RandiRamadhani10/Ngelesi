import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Button,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import HeaderProps from '../child/HeaderProps';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Models from '../../models/Models';
import DatePicker from 'react-native-date-picker';
const UbahProfilGuru = ({navigation}) => {
  const [id_user, setIdUser] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);
  const [nama, setNama] = useState(null);
  const [nomor, setNomor] = useState(null);
  const [tempat, setTempat] = useState(null);
  const [lahir, setLahir] = useState(null);
  const [pendidikan, setPendidikan] = useState(null);
  const [alamat, setAlamat] = useState(null);
  const [seta, setdata] = useState(null);
  const handleChooseFile = async () => {
    try {
      launchImageLibrary({mediaType: 'photo'}, response => {
        if (response.errorMessage) {
          return alert(response.errorMessage);
        }
        if (response.assets?.length > 0) setUploadImage(response.assets[0]);
      });
    } catch (error) {
      alert(error.message);
    }
  };
  const test = async () => {
    try {
      if (uploadImage != null) {
        const formImg = new FormData();
        formImg.append('foto', {
          name: uploadImage.fileName,
          type: uploadImage.type,
          uri:
            Platform.OS === 'ios'
              ? uploadImage.uri.replace('file://', '')
              : uploadImage.uri,
        });
        const response = await Models.uploadFotoProfilGuru(formImg);
        console.log(response);
        if (response.status == 'success') {
          const data = {
            id_admin: id_user.id,
            nama: nama,
            no_hp: nomor,
            tempat_lahir: tempat,
            tanggal_lahir: lahir,
            pendidikan: pendidikan,
            alamat: alamat,
            foto: response.fileName,
          };
          await Models.updateProfilGuru(data);
          setUploadImage(null);
          return setPopUp(1);
        }
        return alert('error');
      } else {
        const data = {
          id_admin: id_user.id,
          nama: nama,
          no_hp: nomor,
          tempat_lahir: tempat,
          tanggal_lahir: lahir,
          pendidikan: pendidikan,
          alamat: alamat,
          foto: items.foto,
        };
        await Models.updateProfilGuru(data);
        setUploadImage(null);
        return setPopUp(1);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    const coba = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('user');
        const res = await JSON.parse(jsonValue);
        setIdUser(res);
        console.log(seta);
      } catch (e) {
        alert(e.message);
      }
    };
    coba();
  }, [setdata]);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 50,
          elevation: 10,
        }}>
        <HeaderProps
          propsName={{nama: 'Ubah Profil', nav: 'user', navs: navigation}}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={{alignItems: 'flex-end'}}>
          <View
            style={{
              borderRadius: 100,
              marginTop: 15,
              borderColor: 'gray',
              borderWidth: 1,
            }}>
            <Image
              style={{
                height: 124,
                width: 124,
                borderRadius: 100,
              }}
              source={{
                uri: uploadImage ? uploadImage.uri : `../../assets/ngelesi.png`,
              }}
            />
          </View>
          <TouchableOpacity
            style={{position: 'relative', top: -40}}
            onPress={handleChooseFile}>
            <Camera />
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={{flex: 1, alignItems: 'center'}}>
            <KeyboardAvoidingView>
              <TextInput
                onChangeText={setNama}
                value={nama}
                style={style.input}
                placeholder="Nama Lengkap"
                placeholderTextColor="#70815D"
                keyboardType="default"
              />

              <TextInput
                onChangeText={setNomor}
                value={nomor}
                style={style.input}
                placeholder="Nomor Telepon"
                placeholderTextColor="#70815D"
                keyboardType="number-pad"
              />
              <TextInput
                onChangeText={setTempat}
                value={tempat}
                style={style.input}
                placeholder="Tempat Lahir"
                placeholderTextColor="#70815D"
                keyboardType="default"
              />
              <TextInput
                onChangeText={setLahir}
                value={lahir}
                style={style.input}
                placeholder="Tanggal Lahir"
                placeholderTextColor="#70815D"
                keyboardType="default"
              />
              <View>
                <Button title="Open" onPress={() => setOpen(true)} />
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </View>
              <TextInput
                onChangeText={setPendidikan}
                value={pendidikan}
                style={style.input}
                placeholder="bidang"
                placeholderTextColor="#70815D"
                keyboardType="default"
              />
              <TextInput
                onChangeText={setAlamat}
                value={alamat}
                style={style.input}
                placeholder="Alamat"
                placeholderTextColor="#70815D"
                keyboardType="default"
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity style={style.inputButton} onPress={test}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const Camera = () => {
  return (
    <View
      style={{
        backgroundColor: '#55705C',
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1,
      }}>
      <Icon name="camera" color="white" size={18} />
    </View>
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
export default UbahProfilGuru;
