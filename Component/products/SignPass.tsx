import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackScreensEnum, RootStackParamList } from './RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../css/SignPass';

type SignCode =
  StackNavigationProp<RootStackParamList, RootStackScreensEnum.SignCode>;


const SignPass = () => {
  const navigation = useNavigation<SignCode>();
  return (
    <View style ={styles.body}>
      <Image source={require('../../media/back.png')} />
      <Text style={styles.txtSign}>Sign Up</Text>
      <Image style={styles.img} source={require('../../media/phoneup.png')} />
      <Text style={styles.txtEnter}>Enter the password</Text>
      <Text style={styles.txtWe}>We need to verify you. We will send you a one time verification code. </Text>
      <TextInput style={styles.txtIpname}>   Password</TextInput>
      <TextInput style={styles.txtPhone}> Confirm Password</TextInput>
      <Pressable style={styles.presSigin}>
        <Text onPress={() => navigation.navigate(RootStackScreensEnum.SignCode)} style={styles.txtSignUp}>Next</Text>
      </Pressable >
    </View>
  )
}

export default SignPass
