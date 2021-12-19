import React from 'react';
import {Text, View, Image} from 'react-native';
const Header = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        elevation: 5,
      }}>
      <Image
        style={{height: 30, width: 30, margin: 5}}
        source={require('../../assets/ngelesi.png')}
      />
      <Text style={{color: '#55705C', marginLeft: 5, fontSize: 20}}>
        NGELESI
      </Text>
    </View>
  );
};

export default Header;
