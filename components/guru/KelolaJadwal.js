import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Headerprops from '../child/HeaderProps';
import moment from 'moment';
const Kelolajadwal = ({route, navigation}) => {
  console.log(route.params);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View style={{flex: 1}}>
      <View style={{height: 50, justifyContent: 'center'}}>
        <Headerprops
          propsName={{
            nama: 'Kelola Jadwal',
            nav: 'userGuru',
            navs: navigation,
          }}
        />
      </View>
      <View
        style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={style.inputButton}
          onPress={() => setOpen(true)}>
          <Text style={{color: 'white'}}>Set Tanggal</Text>
        </TouchableOpacity>
      </View>
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        format="YYYY/MM/DD HH:mm"
        minimumDate={new Date(moment())}
        maximummDate={new Date(moment().endOf('month'))}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          console.log(moment(date).subtract(10, 'days').calendar());
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({
  input: {
    justifyContent: 'center',
    backgroundColor: '#BAD79B',
    height: 50,
    marginVertical: 10,
    borderRadius: 50,
    padding: 10,
    paddingLeft: 15,
    color: 'black',
    elevation: 4,
  },
  text: {fontSize: 15, marginTop: 15},
  inputButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#55705C',
    height: 40,
    width: 120,
    margin: 12,
    borderRadius: 50,
    elevation: 4,
  },
});

export default Kelolajadwal;
