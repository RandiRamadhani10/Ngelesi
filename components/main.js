import React from 'react';
import {Text, View, SafeAreaView, ScrollView, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import User from './main/User';
import Home from './main/Home';
import Kelas from './main/Kelas';
import Search from './main/Search';
import KelasGuru from './guru/KelasGuru';
import Header from './child/header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import dat from '../utils/dat';
import Userguru from './guru/UserGuru';
const Tab = createMaterialBottomTabNavigator();

const Main = ({route, navigation}) => {
  console.log(dat.mode);
  const {pilihan} = route.params;
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
      {pilihan == 'murid' ? <Murid /> : <Guru />}
    </View>
  );
};

const Murid = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={'white'}
      inactiveColor="#202A22"
      labeled={false}
      barStyle={{backgroundColor: '#55705C'}}
      fgda
      fsgbn3
      fhsx>
      <Tab.Screen
        name="home"
        component={Home}
        showLabel={false}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Icon name="home" size={20} color={color} />,
          backgroundColor: 'white',
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        showLabel={false}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="search" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="kelas"
        component={Kelas}
        showLabel={false}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="th-list" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="user"
        component={User}
        showLabel={false}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="user-alt" style="solid" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const Guru = () => {
  return (
    <Tab.Navigator
      initialRouteName="kelasGuru"
      activeColor={'white'}
      inactiveColor="#202A22"
      labeled={false}
      barStyle={{backgroundColor: '#55705C'}}
      fgda
      fsgbn
      fhsx>
      <Tab.Screen
        name="kelasGuru"
        component={KelasGuru}
        showLabel={false}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="th-list" size={20} color={color} />
          ),
          backgroundColor: 'white',
        }}
      />
      <Tab.Screen
        name="userGuru"
        component={Userguru}
        showLabel={false}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="user" size={20} color={color} solid />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Main;
