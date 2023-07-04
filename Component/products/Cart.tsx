import { Text, View } from 'react-native';
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ProductRootStackParams, ProductScreenEnum } from './ProductRootTabParams';

type CartProp =
  BottomTabNavigationProp<ProductRootStackParams, ProductScreenEnum.Cart>;

const Cart = (): React.JSX.Element => {
  return (
    <View>
      <Text>Screen6</Text>
    </View>
  )
}

export default Cart