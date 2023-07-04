import { Text, View } from 'react-native';
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ProductRootStackParams, ProductScreenEnum } from './ProductRootTabParams';

type Screen7Prop =
  BottomTabNavigationProp<ProductRootStackParams, ProductScreenEnum.Favorite>;

const Favorite = (): React.JSX.Element => {
  return (
    <View>
      <Text>Favorite</Text>
    </View>
  )
}

export default Favorite