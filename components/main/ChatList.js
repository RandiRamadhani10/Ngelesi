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
import HeaderProps from '../child/HeaderProps';
const Chatlist = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '100%',
          height: 50,
          elevation: 10,
        }}>
        <HeaderProps
          propsName={{nama: 'Chat', nav: 'Chat', navs: navigation}}
        />
      </View>
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity
            style={{
              margin: 5,
              width: 300,
              padding: 5,
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'gray',
            }}
            onPress={() => {
              navigation.navigate('Chat', {id: id});
            }}>
            <View
              style={{
                marginBottom: 10,
                marginTop: 10,
                marginRight: 10,
                width: 60,
                height: 60,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                elevation: 5,
              }}>
              <Image
                style={{height: 60, width: 60}}
                source={require('../../assets/ngelesi.png')}
              />
            </View>
            <Text style={{fontSize: 20}}>Randi</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Chatlist;
