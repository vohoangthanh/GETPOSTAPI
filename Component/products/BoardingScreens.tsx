import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackScreensEnum,RootStackParamList } from './RootStackParamList';
import { useNavigation } from '@react-navigation/native';


type oder2Prop =
  StackNavigationProp<RootStackParamList, RootStackScreensEnum.TabScreens>;
const BoardingScreens = () => {
    const navigation = useNavigation<oder2Prop>();
  return (
    <View>
      <Text onPress={() => navigation.navigate(RootStackScreensEnum.TabScreens)}>BoardingScreens</Text>
    </View>
  )
}

export default BoardingScreens

