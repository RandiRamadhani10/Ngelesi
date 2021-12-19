import React from 'react';

const Kelasguru = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <SafeAreaView
        style={{
          alignItems: 'center',
          width: '100%',
        }}>
        <ScrollView style={{width: '100%'}}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#BAD79B',
                width: '70%',
                padding: 15,
                borderRadius: 15,
                marginTop: 15,
              }}
              onPress={() => {}}>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}></Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                }}>
                <Text
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 2,
                  }}>
                  <Icon name="calendar-alt" size={15} />
                </Text>
                <Text>Kamis, Jumat, Sabtu</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                }}>
                <Text
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 2,
                  }}>
                  <Icon name="clock" size={15} />
                </Text>
                <Text>09.00 - 11.00</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                }}>
                <Text
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 2,
                  }}>
                  <Icon name="user" solid size={15} />
                </Text>
                <Text>Dwi Randi Ramadhani</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View
        style={{
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#55705C',
          borderRadius: 50,
          position: 'absolute',
          right: 20,
          bottom: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Chat');
          }}>
          <Text>
            <Icon name="comments" size={30} solid color="white" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Kelasguru;
