
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ProductRootStackParams,ProductRootHomeStackScreens } from './ProductRootTabParams';


const Stack = createStackNavigator<ProductRootStackParams>();

export const ProductHomeStack = (): React.JSX.Element => {
  return (
    <Stack.Navigator>
      {
        ProductRootHomeStackScreens.map((item, index) => {
          return (
            <Stack.Screen key={item.id} name={item.name}
              component={item.component} 
              options={item.option}
            />
          )
        })
      }
    </Stack.Navigator>
  )
}