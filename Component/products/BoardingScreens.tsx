import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackScreensEnum, RootStackParamList } from './RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../css/BoadingCss';

type SignUp =
  StackNavigationProp<RootStackParamList, RootStackScreensEnum.SignUp>;
const BoardingScreens = () => {
  const navigation = useNavigation<SignUp>();
  return (
    <View style={styles.body}>
      {/* <Text onPress={() => navigation.navigate(RootStackScreensEnum.TabScreens)}>BoardingScreens</Text> */}
      <Image source={require('../../media/boading.png')} />
      <Text style={styles.txtRealax}>Realax and shop</Text>
      <Text style={styles.txtShop}>     Shop online and get grocories delivered from stores to your home in as fast as 1 hour .</Text>
      <Pressable style={styles.presSigin}>
        <Text style={styles.txtSign}>Sign up</Text>
      </Pressable >
      <Pressable style={styles.presSigUp} onPress={() => navigation.navigate(RootStackScreensEnum.SignUp)}>
        <Text style={styles.txtSignUP}>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default BoardingScreens

