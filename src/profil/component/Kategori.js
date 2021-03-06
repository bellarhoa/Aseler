import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet, 
    Image,
    FlatList
}from "react-native";
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const listKategori = [
    {
      id: 1,
      gambar : require  ('../../../assets/image/tas1.jpg'),
      title: 'Boneka',
      jumlah: '12 Produk',
    },
    {
        id: 2,
        gambar : require  ('../../../assets/image/tas2.jpg'),
        title: 'Boneka',
        jumlah: '12 Produk',
      },

      {
        id: 3,
        gambar : require  ('../../../assets/image/tas1.jpg'),
        title: 'Boneka',
        jumlah: '12 Produk',
      },
      {
        id: 4,
        gambar : require  ('../../../assets/image/tas1.jpg'),
        title: 'Boneka',
        jumlah: '12 Produk',
      },
      
  ];

class Kategori extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList
            style={{marginTop: 10}}
            data={listKategori}
            renderItem={({item}) => (
                <Item
                title={item.title}
                jumlah={item.jumlah}
                gambar={item.gambar}
                tekan={() => this.props.navigation.navigate(item.title)}
                />
            )}
            keyExtractor={(item) => item.id}
            />
            </View>
        );
    }
}

const Item = ({title, jumlah, gambar, tekan}) => (
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
              <View style={{marginLeft: 15, flex: 0.15}}>
                  <Image source={gambar}
                  style={{flex:1, width: null, height: null, resizeMode: 'cover'}}/>
                </View>
          <View style={{marginLeft: 20}}>
            <Text style={[styles.h2, {color: '#353535'}]}>{title}</Text>
          </View>
          <View style={{flex: 1, alignItems:'flex-end'}}>
            <Text style={[styles.h4, {color: '#858585'}]}>{jumlah}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

export default Kategori;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center', 
    },
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
})