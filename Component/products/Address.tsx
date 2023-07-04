import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { styles } from '../css/Addrescss'
const Address = (): React.JSX.Element => {
    return (
        <View style={styles.body}>
            <View style={styles.contaiba}>
                <Image source={require('../../media/back.png')} />
                <Image source={require('../../media/add.png')} />
            </View>
            <Text style={styles.txtAcout}>Addresses</Text>
            <View style={styles.contaiba}>
                <View style={styles.contaihome}>
                    <Image source={require('../../media/homene.png')} />
                    <View >
                        <Text style={styles.txtHome}>Home </Text>
                        <Text style={styles.txtHome}>Lungangen 6, 41722</Text>
                    </View>
                </View>
                <Image source={require('../../media/nhay.png')} />
            </View>
            <View style={styles.gach} />
            <View style={styles.contaiba}>
                <View style={styles.contaihome}>
                    <Image source={require('../../media/homene.png')} />
                    <View >
                        <Text style={styles.txtHome}>Home </Text>
                        <Text style={styles.txtHome}>Lungangen 6, 41722</Text>
                    </View>
                </View>
                <Image source={require('../../media/nhay.png')} />
            </View>
            <View style={styles.gach} />
        </View>
    )
}

export default Address
