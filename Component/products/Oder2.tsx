import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from '../css/Odercss2'

import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackScreensEnum,RootStackParamList } from './RootStackParamList';
type oderProp =
  StackNavigationProp<RootStackParamList, RootStackScreensEnum.Oder2>;

const Oder2 = () => {
  const navigation = useNavigation<oderProp>();
  return (
    <View style={styles.body}>
      <Image source={require('../../media/back.png')} />
      <Text style={styles.txtAcout}>Orders</Text>
      <View style={styles.contaiTab}>
        <Text onPress={() => navigation.goBack()} style={styles.txtTab2}>Ongoing</Text>
        <Text style={styles.txtTab}>History</Text>
      </View >
      <View style={styles.gach} />
      <View style={styles.contaievent}>
        <View style={styles.contaiIcon}>
          <View style={styles.img}>
            <Image source={require('../../media/gio.png')} />
          </View>
          <View style={styles.contaiTxt}>
            <Text style={styles.txtOder}>Oder #345</Text>
            <Text style={styles.txtDelive}>Delivered</Text>
            <Text style={styles.txtOc}>October 26, 2023</Text>
          </View>
        </View>
        <Text style={styles.txtTab}>$700</Text>
      </View>
      <View style={styles.gachdai} />
      <View style={styles.contaievent}>
        <View style={styles.contaiIcon}>
          <View style={styles.img}>
            <Image source={require('../../media/gio.png')} />
          </View>
          <View style={styles.contaiTxt}>
            <Text style={styles.txtOder}>Oder #346</Text>
            <Text style={styles.txtDelive2}>Delivered</Text>
            <Text style={styles.txtOc}>October 14, 2023</Text>
          </View>
        </View>
        <Text style={styles.txtTab}>$452</Text>
      </View>
      <View style={styles.gachdai} />
      <View style={styles.contaievent}>
        <View style={styles.contaiIcon}>
          <View style={styles.img}>
            <Image source={require('../../media/gio.png')} />
          </View>
          <View style={styles.contaiTxt}>
            <Text style={styles.txtOder}>Oder #347</Text>
            <Text style={styles.txtDelive}>Delivered</Text>
            <Text style={styles.txtOc}>Juli 26, 2023</Text>
          </View>
        </View>
        <Text style={styles.txtTab}>$281</Text>
      </View>
      <View style={styles.gachdai} />

    </View>
  )
}

export default Oder2
