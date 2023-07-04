import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from '../css/Odercss'

import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackScreensEnum,RootStackParamList } from './RootStackParamList';



type oder2Prop =
  StackNavigationProp<RootStackParamList, RootStackScreensEnum.Oder2>;

const Oder = (): React.JSX.Element => {
    const navigation = useNavigation<oder2Prop>();
    return (
        <View style={styles.body}>
            <Image source={require('../../media/back.png')} />
            <Text style={styles.txtAcout}>Orders</Text>
            <View style={styles.contaiTab}>
                <Text  style={styles.txtTab}>Ongoing</Text>
                <Text onPress={() => navigation.navigate(RootStackScreensEnum.Oder2)} style={styles.txtTab2}>History</Text>
            </View >
            <View style={styles.gach} />
            <View style={styles.contaievent}>
                <View style={styles.contaiMarch}>
                    <Image source={require('../../media/lich.png')} />
                    <Text style={styles.txtMarch}>March 5, 2023</Text>
                </View>
                <Text style={styles.txtTime}>6:30 pm</Text>
            </View>
            <View style={styles.contaiship}>
            <Image  source={require('../../media/Line.png')} style ={styles.img}/>
                <View style={styles.contaiday}>
                    <View style={styles.tich}>
                        <Image source={require('../../media/tich.png')} />
                    </View>
                    <View style={styles.tich}>
                        <Image source={require('../../media/tich.png')} />
                    </View>
                    <View style={styles.tich}>
                        <Image source={require('../../media/tich.png')} />
                    </View>
                    
                </View>
                <View style={styles.contaiIcon}>
                    <View style={styles.Icon}>
                        <Image source={require('../../media/Group.png')} />
                        <Text style={styles.txtWe}>We are packin your items...</Text>
                    </View>
                    <View style={styles.Icon}>
                        <Image source={require('../../media/xe.png')} />
                        <Text style={styles.txtWe}>Your order is delivering to your location...</Text>
                    </View>
                    <View style={styles.Icon}>
                        <Image source={require('../../media/trao.png')} />
                        <Text style={styles.txtWe}>Your order is received.</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Oder
