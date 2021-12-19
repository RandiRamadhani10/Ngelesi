/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/main';
import Chat from './components/main/Chat';
import UbahProfil from './components/main/UbahProfil';
import UbahPassword from './components/main/UbahPassword';
import DetailKelas from './components/main/DetailKelas';
import Tugas from './components/main/Tugas';
import Detailguru from './components/main/DetailGuru';
import Pilihkelas from './components/main/PilihKelas';
import Pembayaran from './components/main/Pembayaran';
import Detailkelasguru from './components/guru/DetailKelasGuru';
import Tambahtugasguru from './components/guru/TambahTugasGuru';
import Detailtugas from './components/guru/DetailTugas';
import Absensiguru from './components/guru/AbsensiGuru';
import Userguru from './components/guru/UserGuru';
import Kelolajadwal from './components/guru/KelolaJadwal';
import Listkelaskelolajadwal from './components/guru/ListKelasKelolaJadwal';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="ListKelasKelolaJadwal"
          component={Listkelaskelolajadwal}
        />
        <Stack.Screen name="KelolaJadwal" component={Kelolajadwal} />
        <Stack.Screen name="UserGuru" component={Userguru} />
        <Stack.Screen name="DetailKelasGuru" component={Detailkelasguru} />
        <Stack.Screen name="DetailTugas" component={Detailtugas} />
        <Stack.Screen name="AbsensiGuru" component={Absensiguru} />
        <Stack.Screen name="TambahTugasGuru" component={Tambahtugasguru} />
        <Stack.Screen name="Pembayaran" component={Pembayaran} />
        <Stack.Screen name="PilihKelas" component={Pilihkelas} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="DetailGuru" component={Detailguru} />
        <Stack.Screen name="DetailKelas" component={DetailKelas} />
        <Stack.Screen name="Tugas" component={Tugas} />
        <Stack.Screen name="UbahPassword" component={UbahPassword} />
        <Stack.Screen name="UbahProfil" component={UbahProfil} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
