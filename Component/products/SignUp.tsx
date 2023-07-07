import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackScreensEnum, RootStackParamList } from './RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../css/SignUpcss';

type SignPass =
  StackNavigationProp<RootStackParamList, RootStackScreensEnum.SignPass>;

const SignUp = () => {
  const navigation = useNavigation<SignPass>();
  return (
    <View style={styles.body}>
      <Image source={require('../../media/back.png')} />
      <Text style={styles.txtSign}>Sign Up</Text>
      <Image style={styles.img} source={require('../../media/phoneup.png')} />
      <TextInput style={styles.txtIpname}>   Name Surname</TextInput>
      <TextInput style={styles.txtPhone}> Phone Number</TextInput>
      <Text style={styles.txtWe}>We need to verify you. We will send you a one time verification code. </Text>
      <Pressable onPress={() => navigation.navigate(RootStackScreensEnum.SignPass)} style={styles.presSigin}>
        <Text style={styles.txtSignUp}>Next</Text>
      </Pressable >
      <View style={styles.contaiAlredy}>
        <Text>Already have an account?</Text>
        <Text style ={styles.txtLogin}> Login</Text>
      </View>
    </View>
  )
}

export default SignUp

