import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, SafeAreaView, Image, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RouteProp } from '@react-navigation/native';


import Shop from '../products/Shop';
import Explore from '../products/Explore';
import Account from '../products/Account';
import { RootStackParamList, RootStackScreensEnum } from '../products/RootStackParamList';
import Cart from '../products/Cart';
import Favorite from '../products/Favorite';
import BoardingScreens from '../products/BoardingScreens';
import Oder from '../products/Oder';
import Oder2 from '../products/Oder2';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

const options = ({
    route,
}: {
    route: RouteProp<RootStackParamList, keyof RootStackParamList>;
}) => {
    const focused = true;
    switch (route.name) {
        case RootStackScreensEnum.Shop:
            return {
                tabBarIcon: ({
                    focused,
                    color,
                    size,
                }: {
                    focused: boolean;
                    color: string;
                    size?: number;
                }): React.ReactNode =>
                    focused ? (
                        <Image source={require('../../media/shopdo.png')} />
                    ) : (
                        <Image source={require('../../media/shop.png')} />
                    ),
                tabBarLabel: 'Home',
                tabBarLabelStyle: {
                    color: focused ? 'gray' : '#FF5E00',
                },
            };
        case RootStackScreensEnum.Explore:
            return {
                tabBarIcon: ({
                    focused,
                    color,
                    size,
                }: {
                    focused: boolean;
                    color: string;
                    size?: number;
                }): React.ReactNode =>
                    focused ? (
                        <Image source={require('../../media/exdo.png')} />
                    ) : (
                        <Image source={require('../../media/ex.png')} />
                    ),
                tabBarLabel: 'Explore',
                tabBarLabelStyle: {
                    color: focused ? 'gray' : '#FF5E00',
                },
            };
        case RootStackScreensEnum.Cart:
            return {
                tabBarIcon: ({
                    focused,
                    color,
                    size,
                }: {
                    focused: boolean;
                    color: string;
                    size?: number;
                }): React.ReactNode =>
                    focused ? (
                        <Image source={require('../../media/cartdo.png')} />
                    ) : (
                        <Image source={require('../../media/cart.png')} />
                    ),
                tabBarLabel: 'Cart',
                tabBarLabelStyle: {
                    color: focused ? 'gray' : '#FF5E00',
                },
            };
        case RootStackScreensEnum.Favorite:
            return {
                tabBarIcon: ({
                    focused,
                    color,
                    size,
                }: {
                    focused: boolean;
                    color: string;
                    size?: number;
                }): React.ReactNode =>
                    focused ? (
                        <Image source={require('../../media/heartdo.png')} />
                    ) : (
                        <Image source={require('../../media/heart.png')} />
                    ),
                tabBarLabel: 'Favorite',
                tabBarLabelStyle: {
                    color: focused ? 'gray' : '#FF5E00',
                },
            };
        case RootStackScreensEnum.Account:
            return {
                tabBarIcon: ({
                    focused,
                    color,
                    size,
                }: {
                    focused: boolean;
                    color: string;
                    size?: number;
                }): React.ReactNode =>
                    focused ? (
                        <Image source={require('../../media/userdo.png')} />
                    ) : (
                        <Image source={require('../../media/userr.png')} />
                    ),
                tabBarLabel: 'Account',
                tabBarLabelStyle: {
                    color: focused ? 'gray' : '#FF5E00',
                },
            };

        default:
            return {};
    }
};

const TabScreens = () => {
    return (
        <Tab.Navigator screenOptions={options}>
            <Tab.Screen name={RootStackScreensEnum.Shop} component={Shop} />
            <Tab.Screen
                name={RootStackScreensEnum.Explore}
                component={Explore}
            />
            <Tab.Screen name={RootStackScreensEnum.Cart} component={Cart} />
            <Tab.Screen
                name={RootStackScreensEnum.Favorite}
                component={Favorite}
            />
            <Tab.Screen
                name={RootStackScreensEnum.Account}
                component={Account}
            />
        </Tab.Navigator>
    );
};

const AppNavigations = (): React.JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Boarding"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name={RootStackScreensEnum.Boarding}
                    component={BoardingScreens}
                />
                {/* <Stack.Screen
                    name={RootStackScreensEnum.SignUp}
                    component={SignUpScreens}
                />
                <Stack.Screen
                    name={RootStackScreensEnum.SignUpPass}
                    component={SignUpPassScreens}
                />
                <Stack.Screen
                    name={RootStackScreensEnum.SignUpCode}
                    component={CodePhoneScreens}
                /> */}
                <Stack.Screen
                    name={RootStackScreensEnum.Oder2}
                    component={Oder2}
                />

                <Stack.Screen
                    name={RootStackScreensEnum.TabScreens}
                    component={TabScreens}
                />
                <Stack.Screen
                    name={RootStackScreensEnum.Oder}
                    component={Oder}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigations;
