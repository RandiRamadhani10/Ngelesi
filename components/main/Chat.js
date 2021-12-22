import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Chat = ({route, navigation}) => {
  const {id} = route.params;
  const [message, onChangeMessage] = useState(null);
  const [items, setItems] = useState(null);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      const res = await JSON.parse(jsonValue);
      setItems(res);
    } catch (e) {}
  };
  getData;
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/bg.png')}
        resizeMode="cover"
        style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            backgroundColor: '#BAD79B',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <View style={{marginLeft: 20, marginRight: 15}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Text>
                <Icon name="chevron-left" size={20} solid color="black" />
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginBottom: 10,
              marginTop: 10,
              marginRight: 10,
              width: 50,
              height: 50,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            }}>
            <Image
              style={{height: 20, width: 20}}
              source={require('../../assets/ngelesi.png')}
            />
          </View>
          <View>
            <Text style={{fontSize: 20}}>Matematika</Text>
            <Text style={{fontSize: 15}}>Putra Sena</Text>
          </View>
        </View>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView style={{flex: 1}}>
            <View style={{marginTop: 20, marginLeft: 20}}>
              <View
                style={{
                  borderColor: 'black',
                  maxWidth: '75%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    paddingTop: 10,
                    paddingLeft: 5,
                    paddingRight: 5,
                    borderRadius: 10,
                    minWidth: '25%',
                    justifyContent: 'flex-end',
                  }}>
                  <Text style={{padding: 0, textAlign: 'left'}}>
                    Halo Murid
                  </Text>
                  <Text style={{padding: 0, textAlign: 'right', fontSize: 10}}>
                    10.20
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TextInput
            style={style.input}
            onChangeText={onChangeMessage}
            value={message}
            placeholder="Ketik disini"
            placeholderTextColor="#70815D"
            keyboardType="default"
          />
          <TouchableOpacity
            style={{backgroundColor: 'white', padding: 7, borderRadius: 50}}>
            <Text>
              <MaterialIcons name="send" size={20} color="#55705C" />
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderColor: 'whitesmoke',
    height: 40,
    width: '70%',
    marginRight: 12,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    paddingLeft: 15,
    color: 'black',
  },
});

export default Chat;
