import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import Daftarmurid from './child/DaftarMurid';
import DaftarUser from './child/DaftarUser';
import Header from './child/header';
import Footer from './child/footer';
const Register = ({navigation}) => {
  
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          height: 50,
          backgroundColor: 'white',
          elevation: 10,
        }}>
        <Header />
      </View>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, marginTop: 20, marginBottom: 10}}>
              DAFTAR
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <DaftarUser prop={navigation} />
          </View>
        </ScrollView>
      </SafeAreaView>
      <Footer />
    </View>
  );
};
const style = StyleSheet.create({
  buttonNotClick: {
    width: 100,
    height: 30,
    color: 'white',
    textAlign: 'center',
    borderRadius: 50,
    padding: 5,
    fontSize: 15,
    backgroundColor: '#D97070',
  },
  buttonOnClick: {
    width: 100,
    height: 30,
    color: 'white',
    textAlign: 'center',
    borderRadius: 50,
    padding: 5,
    fontSize: 15,
    backgroundColor: '#C4C4C4',
  },
});
export default Register;
