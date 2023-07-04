
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { UserRootStackScreens, UserRootStackParams } from './UserRootStackParams'


const Stack = createStackNavigator<UserRootStackParams>();

export const UsersStack = (): React.JSX.Element => {
  return (
    <Stack.Navigator>
      {
        UserRootStackScreens.map((item, index) => {
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