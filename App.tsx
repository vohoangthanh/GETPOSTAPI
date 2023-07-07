
import React from 'react';
import { SafeAreaView } from 'react-native'
import { UsersStack } from './Component/users/UserStack';
import { ProductHomeStack } from './Component/products/ProductHomeStack';
import { ProductTabs } from './Component/products/ProductBottomTab';
import { NavigationContainer } from '@react-navigation/native';
import Oder from './Component/products/Oder';
import Oder2 from './Component/products/Oder2';
import Address from './Component/products/Address';
import Shop from './Component/products/Shop';
import Explore from './Component/products/Explore';
import AppNavigations from './Component/navigation/AppNavigation';
import BoardingScreens from './Component/products/BoardingScreens';
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <NavigationContainer>
        <ProductTabs/>
      </NavigationContainer> */}
      <AppNavigations/>
      {/* <BoardingScreens/> */}
    </SafeAreaView>

  )
}


export default App;
