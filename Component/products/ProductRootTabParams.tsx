import React from "react";

import Explore from "./Explore";
import Cart from "./Cart";
import Favorite from "./Favorite";
import Shop from "./Shop";


import ScreenHome from "./ScreenHome";
import ScreenDetail from "./ScreenDetail";
import Account from "./Account";
import Oder from "./Oder";
import Oder2 from "./Oder2";

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator<ProductRootStackParams>();



// tạo 1 enum để định nghĩa các tên của các màn hình
export enum ProductScreenEnum {
  Explore = "Explore",
  Cart = "Cart",
  Favorite = "Favorite",
  Shop = "Shop",
  ScreenHome = "ScreenHome",
  ScreenDetail = "ScreenDetail",
  Account = "Account",
  Oder = "Oder",
  Oder2 = "Oder2",
}

// tạo 1 type để định nghĩa các params của các màn hình
export type ProductRootStackParams = {
  Explore: undefined;
  Cart: undefined;
  Favorite: undefined;
  Shop: undefined;
  ScreenHome: undefined;
  ScreenDetail: undefined;
  Account: undefined;
  Oder: undefined;
  Oder2: undefined;
}

// tạo 1 mảng để định nghĩa các các màn hình của Tab Home
export const ProductRootHomeStackScreens: any[] = [
  {
    id: 1, name: ProductScreenEnum.Shop,
    component: Shop, option: { headerShown: true }
  },
  {
    id: 2, name: ProductScreenEnum.Explore,
    component: Explore, option: { headerShown: false }
  },
  {
    id: 3, name: ProductScreenEnum.Cart,
    component: Cart, option: { headerShown: false }
  },
  {
    id: 4, name: ProductScreenEnum.Favorite,
    component: Favorite, option: { headerShown: false }
  },
  {
    id: 5, name: ProductScreenEnum.Account,
    component: Account, option: { headerShown: true }
  },
  {
    id: 6, name: ProductScreenEnum.Oder,
    component: Oder, option: { headerShown: true }
  },
  {
    id: 7, name: ProductScreenEnum.Oder2,
    component: Oder2, option: {  headerShown: true   }
  },
]

// const ProductRootTabHome = (): React.JSX.Element => {
//   return (
//     <Stack.Navigator>
//       {
//         ProductRootHomeStackScreens.map((item, index) => {
//           return (
//             <Stack.Screen key={item.id} name={item.name}
//               component={item.component}
//               options={item.option}
//             />
//           )
//         })
//       }
//     </Stack.Navigator>
//   )
// }

// tạo 1 mảng để định nghĩa các các màn hình của Users
export const ProductRootTabScreens: any[] = [
  {
    id: 1, name: ProductScreenEnum.Shop,
    component: Shop, option: { headerShown: false },
    
  },
  {
    id: 2, name: ProductScreenEnum.Explore,
    component: Explore, option: { headerShown: false }
  },
  {
    id: 3, name: ProductScreenEnum.Cart,
    component: Cart, option: { headerShown: false }
  },
  {
    id: 4, name: ProductScreenEnum.Favorite,
    component: Favorite, option: { headerShown: false }
  },
  {
    id: 5, name: ProductScreenEnum.Account,
    component: Account, option: { headerShown: false }
  }
]




