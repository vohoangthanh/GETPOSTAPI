import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProductRootStackParams, ProductScreenEnum } from './ProductRootTabParams';
import { styles } from '../css/Acouts';


  
type oderProp =
  StackNavigationProp<ProductRootStackParams, ProductScreenEnum.Oder>;
const Account = (): React.JSX.Element => {
  const navigation = useNavigation<oderProp>();
  return (
    <View style={styles.body}>
      <Image source={require('../../media/back.png')} />
      <Text style={styles.txtAcout}>Account</Text>
      <View style={styles.contaiprofile}>
        <Image source={require('../../media/userlon.png')} />
        <Text style={styles.txtProfile}>Profile</Text>
      </View>
      <View style={styles.contaiOrders}>
        <Image source={require('../../media/giohang.png')} />
        <Text onPress={() => navigation.navigate(ProductScreenEnum.Oder)} style={styles.txtProfile}>Orders</Text>
      </View>
      <View style={styles.contaiOrders}>
        <Image source={require('../../media/Vector.png')} />
        <Text style={styles.txtProfile}>Address</Text>
      </View>
      <View style={styles.contaiOrders}>
        <Image source={require('../../media/pay.png')} />
        <Text style={styles.txtProfile}>Payment</Text>
      </View>
    </View>
  )
}

export default Account

