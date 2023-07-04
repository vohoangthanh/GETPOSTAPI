
import React from 'react';
import { Image,Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductRootTabScreens, ProductRootStackParams } from './ProductRootTabParams'
import { ProductRootHomeStackScreens } from './ProductRootTabParams';
const Stack = createStackNavigator<ProductRootStackParams>();
import Shop from './Shop';
import Explore from './Explore';
import Account from './Account';
import Cart from './Cart';
import Favorite from './Favorite';
import { ProductHomeStack } from './ProductHomeStack';
const Tab = createBottomTabNavigator<ProductRootStackParams>();
const options = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      if (route.name === 'Shop') {
        return focused ?
          <Image source={require('../../media/shopdo.png')} />
          : <Image source={require('../../media/shop.png')} />
      } else if (route.name === 'Explore') {
        if (focused) {
          return <Image source={require('../../media/exdo.png')} />
        }
        return <Image source={require('../../media/ex.png')} />
      }else if (route.name === 'Cart') {
        return focused ?
          <Image source={require('../../media/cartdo.png')} />
          : <Image source={require('../../media/cart.png')} />
      }else if (route.name === 'Favorite') {
        return focused ?
          <Image source={require('../../media/heartdo.png')} />
          : <Image source={require('../../media/heart.png')} />
      }else if (route.name === 'Account') {
        return focused ?
          <Image source={require('../../media/userdo.png')} />
          : <Image source={require('../../media/userr.png')} />
      }
    },
    tabBarLabel: ({ focused, color, size }) => {
      if (route.name === 'Shop') {
        return focused ? <Text style={{ color: '#FF5E00' }}>Shop</Text>
          : <Text>Shop</Text>
      } else if (route.name === 'Explore') {
        return focused ? <Text style={{ color: '#FF5E00' }}>Explore</Text>
          : <Text>Explore</Text>
      }else if (route.name === 'Cart') {
        return focused ? <Text style={{ color: '#FF5E00' }}>Cart</Text>
          : <Text>Cart</Text>
      }else if (route.name === 'Favorite') {
        return focused ? <Text style={{ color: '#FF5E00' }}>Favorite</Text>
          : <Text>Favorite</Text>
      }else if (route.name === 'Account') {
        return focused ? <Text style={{ color: '#FF5E00' }}>Account</Text>
          : <Text>Account</Text>
      }
    }
  })

export const ProductTabs = (): React.JSX.Element => {
  return (
    <Tab.Navigator screenOptions={options}>
      {
        ProductRootTabScreens.map((item, index) => {
          return (
            <Tab.Screen key={item.id} name={item.name}
              component={item.component}
              options={item.option}  
            />
          )
        })
      }
    </Tab.Navigator>
  )
}