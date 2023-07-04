import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { UserRootStackParams, UserScreenEnum } from './UserRootStackParams';

type Screen3Prop =
  StackNavigationProp<UserRootStackParams, UserScreenEnum.Screen3>;


const Screen3 = (): React.JSX.Element => {
  const navigation = useNavigation<Screen3Prop>();
  return (
    <View>
      <Text>Screen3</Text>
      <Button title="Go to Screen4" 
          onPress={() => navigation.navigate(UserScreenEnum.Screen4)} />
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({})