import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Login');
  }, 3000);

  return (
    <View style={styles.background}>
      <View style={styles.bgRounded}>
        <Image source={require('../assets/ngelesi.png')} style={styles.logo} />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BAD79B',
  },
  logo: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgRounded: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 200,
  },
  teksDua: {
    fontSize: 15,
    fontWeight: '200',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    color: 'white',
  },
});
