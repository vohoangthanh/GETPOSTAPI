import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { UserRootStackParams, UserScreenEnum } from './UserRootStackParams';

type Screen4Prop =
  StackNavigationProp<UserRootStackParams, UserScreenEnum.Screen4>;

const Screen4 = (): React.JSX.Element => {
  const navigation = useNavigation<Screen4Prop>();
  return (
    <View>
      <Text>Screen4</Text>
      <Button title="Go to Screen3"
        onPress={() => navigation.navigate(UserScreenEnum.Screen3)} />
      <Button title="Go back Screen3"
        onPress={() => navigation.goBack()} />
    </View>
  )
}

export default Screen4

const styles = StyleSheet.create({})