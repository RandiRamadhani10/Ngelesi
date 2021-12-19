import React from 'react';
import {View, Text} from 'react-native';
const Footer = () => {
  return (
    <View
      style={{
        backgroundColor: '#202A22',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 15, padding: 5}}>
        © 2021 Ngelesi
      </Text>
    </View>
  );
};

export default Footer;
