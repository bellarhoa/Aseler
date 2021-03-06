import React from 'react';
import {View, StyleSheet, Image, Text, FlatList} from 'react-native';
import Card from '../component/Card';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const listProfil = [
  {
    id: 1,
    icon: 'person',
    title: 'Profil Akun',
    desc: 'Mengedit data akun aplikasi',
    isRequired: false,
  },
  {
    id: 2,
    icon: 'basket',
    title: 'Profil Toko',
    desc: 'Mengedit data toko',
    isRequired: true,
  },
  {
    id: 3,
    icon: 'card-outline',
    title: 'Pembayaran',
    desc: 'Beritahu pembeli metode pembayarannya',
    isRequired: true,
  },
  {
    id: 4,
    icon: 'bicycle',
    title: 'Pengiriman',
    desc: 'Beritahu pembeli metode pengirimannya',
    isRequired: true,
  },
  {
    id: 5,
    icon: 'chatbubble-ellipses',
    title: 'Pesan Template',
    desc: 'Tidak perlu mengetik berulang-ulang',
    isRequired: false,
  },
];

export default class ProfilPage extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{height: 166, backgroundColor: '#284B63'}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'center',
            }}>
            <Image
              style={styles.image}
              source={require('../../assets/image/profile.png')}
            />
            <View style={{marginLeft: 15, justifyContent: 'center'}}>
              <Text style={styles.h1}>John Doe</Text>
              <Text style={styles.h3}>Miniso Indonesia</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              marginLeft: 43,
              marginRight: 43,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={[styles.h2, {textAlign: 'left'}]}>0</Text>
              <Text style={[styles.h5, {textAlign: 'left'}]}>Pesanan</Text>
            </View>
            <View>
              <Text style={[styles.h2, {textAlign: 'left'}]}>0</Text>
              <Text style={[styles.h5, {textAlign: 'left'}]}>Selesai</Text>
            </View>
            <View>
              <Text style={[styles.h2, {textAlign: 'left'}]}>0</Text>
              <Text style={[styles.h5, {textAlign: 'left'}]}>Dibatalkan</Text>
            </View>
          </View>
          <TouchableWithoutFeedback style={{alignItems: 'center'}}>
            <Card style={styles.button} onPress={() => this.props.navigation.navigate('Profil Toko')}>
              <Text style={[styles.h4, {color: '#353535'}]}>
                Lihat Profil Toko
              </Text>
            </Card>
          </TouchableWithoutFeedback>
        </View>
        <FlatList
          style={{marginTop: 20}}
          data={listProfil}
          renderItem={({item}) => (
            <Item
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              isRequired={item.isRequired}
              tekan={() => this.props.navigation.navigate(item.title)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const Item = ({icon, title, desc, isRequired, tekan}) => (
  <TouchableWithoutFeedback onPress={tekan}>
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 16,
        paddingRight: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Ionicons name={icon} color="#858585" size={20} />
        <View style={{marginLeft: 15}}>
          <Text style={[styles.h2, {color: '#353535'}]}>{title}</Text>
          <Text style={[styles.h4, {color: '#858585'}]}>{desc}</Text>
        </View>
      </View>
      {isRequired === true ? (
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 10 / 2,
            backgroundColor: '#F45B69',
          }}
        />
      ) : null}
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  image: {height: 60, width: 60, borderRadius: 60 / 2},
  h1: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
  },
  h2: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
  },
  h3: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  h4: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
  h5: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-Regular',
    fontSize: 13,
  },
  button: {
    marginTop: 20,
    padding: 9,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
