import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ProductRootStackParams, ProductScreenEnum } from './ProductRootTabParams';
import { styles } from '../css/Shopcss';
// type ShopProp =
//   BottomTabNavigationProp<ProductRootStackParams, ProductScreenEnum.Shop>;

//   type oderProp =
//   StackNavigationProp<ProductRootStackParams, ProductScreenEnum.Shop>;
//   const navigation = useNavigation<oderProp>();
const Shop = (): React.JSX.Element => {
  return (
    <View style={styles.body}>
      <View style={styles.contaiTxt}>
        <Image source={require('../../media/vitri.png')} />
        <Text style={styles.txtLungangen}>Lungangen</Text>
      </View>
      <View>
        <TextInput
          placeholder='          Search'
          style={styles.input} >
        </TextInput>
        <Image style={styles.imgserch} source={require('../../media/search.png')} />
      </View>
      <View style={styles.contaiCate}>
        <Text style={styles.txtCategories}>Categories</Text>
        <Text style={styles.txtseeall}>see all</Text>
      </View>
      <View style={styles.scrolView}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.contaiicon}>
            <View style={styles.imgicon}>
              <Image source={require('../../media/chumnho.png')} />
            </View>
            <Text >Fruits</Text>
          </View>
          <View style={styles.contaiicon}>
            <View style={styles.imgicon}>
              <Image source={require('../../media/bi.png')} />
            </View>
            <Text >Vegtables</Text>
          </View>
          <View style={styles.contaiicon}>
            <View style={styles.imgicon}>
              <Image source={require('../../media/bittet.png')} />
            </View>
            <Text >Meat</Text>
          </View>
          <View style={styles.contaiicon}>
            <View style={styles.imgicon}>
              <Image source={require('../../media/fish.png')} />
            </View>
            <Text >Fish</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.contaiCate}>
        <Text style={styles.txtCategories}>Popular deals</Text>
        <Text style={styles.txtseeall}>see all</Text>
      </View>
      <ScrollView style={styles.scrolView2} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.contaiCoint}>
          <Image style={styles.imgapp} source={require('../../media/Apple.png')} />
          <View style={styles.contaitext}>
            <View style={styles.txt}>
              <Text style={styles.txtRed}>Red Apple</Text>
              <Text >1kg,priceg</Text>
              <Text style={styles.txtGia}>$ 4,99</Text>
            </View>
            <Image style={styles.imgAdd} source={require('../../media/cong.png')} />
          </View>
        </View>
        <View style={styles.contaiCoint}>
          <View style={styles.imgcontai}>
            <Image style={styles.imgapp} source={require('../../media/chesa.png')} />
          </View>

          <View style={styles.contaitext}>
            <View style={styles.txt}>
              <Text style={styles.txtRed}>Or Banana</Text>
              <Text >1kg,priceg</Text>
              <Text style={styles.txtGia}>$ 5,99</Text>
            </View>
            <Image style={styles.imgAdd} source={require('../../media/cong.png')} />
          </View>
        </View>
        <View style={styles.contaiCoint}>
          <Image style={styles.imgapp} source={require('../../media/dau.png')} />
          <View style={styles.contaitext}>
            <View style={styles.txt}>
              <Text style={styles.txtRed}>Red Apple</Text>
              <Text >1kg,priceg</Text>
              <Text style={styles.txtGia}>$ 4,99</Text>
            </View>
            <View>
              <Image style={styles.imgAdd} source={require('../../media/cong.png')} />
            </View>

          </View>
        </View>
      </ScrollView>

    </View>
  )
}

export default Shop

